package misis.loft.api.model;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(example = "PENDING/CLOSED")
public enum TicketStatus {
    PENDING, CLOSED
}
