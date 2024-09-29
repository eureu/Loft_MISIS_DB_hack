package misis.loft.api.web.controller;

import misis.loft.api.exception.UserAlreadyExistsException;
import misis.loft.api.exception.UserNotFoundException;
import misis.loft.api.exception.WrongPasswordException;
import misis.loft.api.service.AuthenticationService;
import misis.loft.api.web.httpData.authentication.AuthenticationRegisterRequest;
import misis.loft.api.web.httpData.authentication.AuthenticationSignInRequest;
import misis.loft.api.web.httpData.authentication.AuthenticationSignInResponse;
import misis.loft.api.web.util.RequestData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Authentication", description = "Endpoints for user authentication and registration")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @Operation(summary = "Register an admin", description = "Register a new admin with tg tag, password, and full name")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Registered successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "409", description = "Conflict. Admin with such tg tag already exists")
    })
    @PostMapping("/register")
    public ResponseEntity<Void> list(
            @RequestBody(description = "Registration data", required = true)
            @RequestData AuthenticationRegisterRequest request) {
        if (request.getTgTag() == null ||
                request.getTgTag().isBlank() ||
                request.getPassword() == null ||
                request.getPassword().isBlank() ||
                request.getName() == null ||
                request.getName().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("registering_admin: " + request.getTgTag());
        try {
            authenticationService.register(
                    request.getTgTag(),
                    request.getPassword(),
                    request.getName());
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserAlreadyExistsException e) {
            log.error("admin_already_exists: " + request.getTgTag());
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @Operation(summary = "Sign in", description = "Sign in with email and password")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Signed in successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "401", description = "Unauthorized. Wrong password"),
            @ApiResponse(responseCode = "404", description = "Not Found. User with such email is not found")
    })
    @PostMapping("/sign-in")
    public ResponseEntity<AuthenticationSignInResponse> signIn(
            @RequestBody(description = "Email and password", required = true)
            @RequestData AuthenticationSignInRequest request) {
        if (request.getTgTag() == null ||
                request.getTgTag().isBlank() ||
                request.getPassword() == null ||
                request.getPassword().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("signing_in: " + request.getTgTag());
        try {
            authenticationService.signIn(
                    request.getTgTag(),
                    request.getPassword());
            var jwt = authenticationService.authenticate(
                    request.getTgTag(),

                    request.getPassword());
            var response = AuthenticationSignInResponse.builder()
                    .jwt(jwt)
                    .build();
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            log.error("user_not_found: " + request.getTgTag());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (WrongPasswordException e) {
            log.error("wrong_password: " + request.getTgTag());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}