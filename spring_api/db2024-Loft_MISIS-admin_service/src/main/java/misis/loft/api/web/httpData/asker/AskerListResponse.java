package misis.loft.api.web.httpData.asker;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;
import misis.loft.api.model.Asker;
import misis.loft.api.model.dto.AskerWithNumOfPendingTicketsDto;

import java.util.List;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class AskerListResponse {
    private List<AskerWithNumOfPendingTicketsDto> askerWithNumOfPendingTicketsDtoList;
}
