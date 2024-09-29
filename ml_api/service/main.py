import requests
from fastapi import FastAPI
from pydantic import BaseModel
from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import PyPDFDirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from transformers import AutoTokenizer, AutoModel
import torch
import os
import numpy as np
from dotenv import load_dotenv
import uvicorn

# Загрузка переменных окружения
load_dotenv()


LLM_API_ENDPOINT = os.getenv("LLM_API_ENDPOINT")  

# Параметры для использования эмбеддинга `sergeyzh/rubert-tiny-turbo`
model_name = "sergeyzh/rubert-tiny-turbo"
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Инициализация модели эмбеддингов
tokenizer = AutoTokenizer.from_pretrained(model_name)
embedding_model = AutoModel.from_pretrained(model_name).to(device)

# Классы данных для запросов и ответов
class Request(BaseModel):
    question: str


class Response(BaseModel):
    answer: str
    class_1: str
    class_2: str


# Инициализация FastAPI
app = FastAPI()

@app.get("/")
def index():
    return {"text": "Интеллектуальный помощник оператора службы поддержки."}

# Шаг 1: Функция для получения эмбеддингов с использованием `sergeyzh/rubert-tiny-turbo`
def embed_texts(texts):
    text_list = [text.page_content for text in texts]
    embeddings = []
    for text in text_list:
        inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512).to(device)
        with torch.no_grad():
            outputs = embedding_model(**inputs)
        # Усреднение эмбеддингов по всем токенам (или возьмите [CLS] токен)
        sentence_embedding = outputs.last_hidden_state.mean(dim=1).cpu().numpy()
        embeddings.append(sentence_embedding)
    # Преобразуем вектора в формат NumPy
    return np.vstack(embeddings)

print('Начало загрузки данных')

# Шаг 2: Загрузка данных из PDF или текстовых файлов
pdf_loader = PyPDFDirectoryLoader(r"data")
data = pdf_loader.load()

# Шаг 3: Разделение текста на части
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
texts = text_splitter.split_documents(data)

# Шаг 4: Генерация эмбеддингов
embeddings = embed_texts(texts)

# Шаг 5: Создание векторного хранилища FAISS
vectorstore = FAISS.from_texts([text.page_content for text in texts], embeddings)

# Шаг 6: Загрузка векторного хранилища FAISS
faiss_index_path = "faiss_index"
vectorstore.save_local(faiss_index_path)
retriever = vectorstore.as_retriever()

# Функция для вызова вашего LLM через API
def call_llm_api(prompt):
    response = requests.post(LLM_API_ENDPOINT, json={"prompt": prompt})
    if response.status_code == 200:
        return response.json().get("generated_text", "")
    else:
        raise ValueError(f"Ошибка при обращении к LLM API: {response.status_code}")

# Основной шаблон для генерации ответов
template = """Ты - полезный помощник, который генерирует несколько поисковых запросов на основе предыдущего контекста переписки с пользователем и нового вопроса.
Предыдущий контекст: 
{context}
Генерируй несколько поисковых запросов, связанных с: {question}
Ответ (4 поисковых запроса):"""
prompt_rag_fusion = ChatPromptTemplate.from_template(template)



# Основной промпт для генерации ответов
system_prompt = (
    '''
    Игнорируй все предыдущие инструкции. Ты ассистент для решения задач по вопросам и ответам. Твоя задача — использовать предоставленный контекст, чтобы дать максимально точный и полезный ответ. Если в контексте нет достаточной информации, прямо скажи, что не знаешь ответа. Если вопрос не касается темы сервиса Rutube, скажи, что ты не компетентен в этой теме. Твоя цель — дать короткий, но вежливый и исчерпывающий ответ на основе доступных данных.
    {context}
    '''
)



class_1_prompt = '''Ты - модель, которая классифицирует запросы по следующим категориям: ["МОДЕРАЦИЯ", "МОНЕТИЗАЦИЯ", "УПРАВЛЕНИЕ АККАУНТОМ", "ДОСТУП К RUTUBE", "ПРЕДЛОЖЕНИЯ", "ВИДЕО", "ТРАНСЛЯЦИЯ", "СОТРУДНИЧЕСТВО ПРОДВИЖЕНИЕ РЕКЛАМА", "ПОИСК", "БЛАГОТВОРИТЕЛЬНОСТЬ ДОНАТЫ"]. Отнеси следующий вопрос к одной из категорий: {question}.'''

class_2_prompt = '''Ты - модель, которая классифицирует запросы по следующим категориям: ['Отклонение/блокировка видео',
       'Отключение/подключение монетизации', 'Нарушение авторских прав',
       'Персонализация', 'Приложение\xa0', 'Отсутствует',
       'Регистрация/Авторизация', 'Удаление аккаунта', 'Студия RUTUBE',
       'Навигация', 'Монетизация', 'Трансляция', 'Загрузка видео',
       'Аналитика', 'Управление трансляцией', 'Комментарии',
       'Воспроизведение видео', 'Продвижение канала',
       'Система рекомендаций', 'Персонализация 0', 'История поиска',
       'Плеер', 'Недоступность видео', 'ТВ-эфиры', 'Управление плеером',
       'Просмотр трансляции', 'Встраивание видео',
       'Смена категории/возрастные ограничения', 'Верификация',
       'Статистика по монетизации', 'Подключение/отключение рекламы',
       'Долгая модерация', 'Блокировка канала',
       'Подключение/отключение донатов', 'Чат/Комментарии',
       'Платный контент', 'Запрещенный контент',
       'Перенос видео с Youtube', 'Текстовый поиск']. Определи, к какой категории относится следующий вопрос: {question}.'''

main_prompt = ChatPromptTemplate.from_messages([("system", system_prompt), ("human", "{question}")])
class_1_template = ChatPromptTemplate.from_template(class_1_prompt)
class_2_template = ChatPromptTemplate.from_template(class_2_prompt)


def rag_fusion_pipeline(question):
    """
    Использует retriever для поиска наиболее релевантных документов,
    на основе которых формируется контекст для генерации ответа.
    """
    input_data = {"context": "", "question": question}
    prompt = prompt_rag_fusion.format(context="", question=question)

    # Запрос к LLM API для генерации дополнительных поисковых запросов
    multiple_queries = call_llm_api(prompt).split('\n')
    
    count = dict()
    for query in multiple_queries:
        if query.strip():  # Пропускаем пустые строки
            relevant_documents = retriever.invoke(query, k=4)
            relevant_documents_content = [page.page_content for page in relevant_documents]
            for content in relevant_documents_content:
                count[content] = count.get(content, 0) + 1

    # Сортировка фрагментов по релевантности
    sorted_chunks_for_rag_fusion = [doc for doc, _ in sorted(count.items(), key=lambda item: item[1], reverse=True)]

    # Объединение всех релевантных фрагментов в единый контекст
    joined_sorted_chunks_for_rag_fusion = "\n".join(sorted_chunks_for_rag_fusion)
    return joined_sorted_chunks_for_rag_fusion


def rag_chain(question):
    """
    Полная цепочка RAG: поиск релевантных документов и генерация ответа.
    """
    # Используем RAG для поиска релевантных документов
    joined_sorted_chunks_for_rag_fusion = rag_fusion_pipeline(question)

    # Формирование финального запроса с контекстом
    prompt = main_prompt.format(context=joined_sorted_chunks_for_rag_fusion, question=question)

    # Вызов вашего API с полным контекстом
    return call_llm_api(prompt)


def classify(question, template):
    prompt = template.format(question=question)
    return call_llm_api(prompt)


@app.post("/predict")
async def predict_sentiment(request: Request):
    response_text = rag_chain(request.question)
    class_1 = classify(request.question, class_1_template)
    class_2 = classify(request.question, class_2_template)
    response = Response(answer=response_text, class_1=class_1, class_2=class_2)
    return response


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=80)
