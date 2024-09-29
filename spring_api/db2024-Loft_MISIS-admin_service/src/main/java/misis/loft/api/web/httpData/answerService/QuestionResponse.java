package misis.loft.api.web.httpData.answerService;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuestionResponse {
    private String response;
    private String class1;
    private String class2;
}
