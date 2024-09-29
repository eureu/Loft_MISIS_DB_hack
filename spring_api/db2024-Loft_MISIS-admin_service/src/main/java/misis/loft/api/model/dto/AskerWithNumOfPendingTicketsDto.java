package misis.loft.api.model.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import misis.loft.api.model.Asker;

@Data
@AllArgsConstructor
@Builder
public class AskerWithNumOfPendingTicketsDto {
    @Schema(example = "Bill Edwards")
    private String askerName;
    @Schema(example = "g2312784")
    private String askerChatId;
    @Schema(example = "7")
    private int numOfPendingTickets;
}
