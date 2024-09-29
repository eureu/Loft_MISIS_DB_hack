package misis.loft.api.web.httpData.authentication;

import misis.loft.api.model.Role;
import misis.loft.api.model.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class AuthenticationSignInResponse {
    private String jwt;
}
