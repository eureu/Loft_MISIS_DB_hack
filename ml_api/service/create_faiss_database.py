from transformers import AutoTokenizer, AutoModel
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
import torch
import numpy as np
import os
from dotenv import load_dotenv

# Загрузка переменных окружения
load_dotenv()

# Параметры для GPU/CPU
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Шаг 1: Инициализация модели и токенизатора для `sergeyzh/rubert-tiny-turbo`
model_name = "sergeyzh/rubert-tiny-turbo"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name).to(device)

# Шаг 2: Функция для генерации эмбеддингов
def embed_texts(texts):
    text_list = [text.page_content for text in texts]
    embeddings = []
    for text in text_list:
        inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512).to(device)
        with torch.no_grad():
            outputs = model(**inputs)
        # Усреднение эмбеддингов по всем токенам (или возьмите [CLS] токен)
        sentence_embedding = outputs.last_hidden_state.mean(dim=1).cpu().numpy()
        embeddings.append(sentence_embedding)
    # Преобразуем вектора в формат NumPy
    return np.vstack(embeddings)

print('Начало загрузки данных')

# Шаг 3: Загрузка данных
text_loader = TextLoader("/app/data/ALL_DATA_NEW.TXT", encoding='utf-8')  # Укажите правильный путь к вашим файлам
data = text_loader.load()

# Шаг 4: Разбиение текстов на фрагменты
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
texts = text_splitter.split_documents(data)

# Шаг 5: Генерация эмбеддингов для текстов
embeddings = embed_texts(texts)

# Шаг 6: Создание векторного хранилища FAISS
vectorstore = FAISS.from_texts([text.page_content for text in texts], embeddings)

# Шаг 7: Сохранение хранилища на диск
faiss_index_path = "faiss_index"
vectorstore.save_local(faiss_index_path)

print("Векторное хранилище FAISS успешно создано и сохранено!")
