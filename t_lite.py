# Load model directly
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("AnatoliiPotapov/T-lite-instruct-0.1")
model = AutoModelForCausalLM.from_pretrained("AnatoliiPotapov/T-lite-instruct-0.1")
prompt = "Расскажи мне, что ты за модель?"

# Токенизация входного текста
inputs = tokenizer(prompt, return_tensors="pt")

# Прогон текста через модель
with torch.no_grad():
    outputs = model.generate(
        **inputs,
        max_length=50,  # Максимальная длина генерируемого текста
        num_return_sequences=1,  # Количество вариантов текста
        no_repeat_ngram_size=2,  # Предотвращение повторения фраз
        top_k=50,  # Обрезка для top-k sampling
        top_p=0.9,  # Обрезка для top-p sampling (nucleus sampling)
        temperature=0.7,  # "Температура" выборки (влияет на вариативность)
        do_sample=True  # Включение выборки для генерации
    )

# Декодирование сгенерированного текста
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
print("Сгенерированный текст:", generated_text)
