package misis.loft.api.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class TicketNotFound extends Exception {
    public TicketNotFound(String message) {
        super(message);
    }
}