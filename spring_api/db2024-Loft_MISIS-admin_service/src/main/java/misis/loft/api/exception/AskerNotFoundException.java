package misis.loft.api.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class AskerNotFoundException extends Exception {
    public AskerNotFoundException(String message) {
        super(message);
    }
}