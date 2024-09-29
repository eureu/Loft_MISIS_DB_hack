package misis.loft.api.service;

import lombok.AllArgsConstructor;
import misis.loft.api.model.Asker;
import misis.loft.api.model.TicketStatus;
import misis.loft.api.repository.AskerRepository;
import misis.loft.api.web.httpData.answerService.QuestionRequest;
import misis.loft.api.web.httpData.answerService.QuestionResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@AllArgsConstructor
public class AnswerService {

    public QuestionResponse sendPredictRequest(String question) {
        WebClient client = WebClient.create("http://localhost:8000");
        return client.post()
                .uri("/predict")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(QuestionRequest.builder().question(question).build()) // отправляем тело запроса с вопросом
                .retrieve()
                .bodyToMono(QuestionResponse.class)
                .block(); // блокирующий вызов для ожидания результата
    }
}
