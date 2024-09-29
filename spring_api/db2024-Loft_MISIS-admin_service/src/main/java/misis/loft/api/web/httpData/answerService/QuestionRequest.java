package misis.loft.api.web.httpData.answerService;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import misis.loft.api.model.dto.AskerWithNumOfPendingTicketsDto;

import java.util.List;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuestionRequest {
    private String question;
}
