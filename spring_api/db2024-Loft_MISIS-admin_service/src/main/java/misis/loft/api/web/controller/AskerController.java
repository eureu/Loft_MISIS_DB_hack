package misis.loft.api.web.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import misis.loft.api.exception.UserAlreadyExistsException;
import misis.loft.api.exception.UserNotFoundException;
import misis.loft.api.exception.WrongPasswordException;
import misis.loft.api.model.Asker;
import misis.loft.api.model.Ticket;
import misis.loft.api.model.TicketStatus;
import misis.loft.api.model.dto.AskerWithNumOfPendingTicketsDto;
import misis.loft.api.service.AskerService;
import misis.loft.api.service.AuthenticationService;
import misis.loft.api.web.httpData.asker.AskerListResponse;
import misis.loft.api.web.httpData.authentication.AuthenticationRegisterRequest;
import misis.loft.api.web.httpData.authentication.AuthenticationSignInRequest;
import misis.loft.api.web.httpData.authentication.AuthenticationSignInResponse;
import misis.loft.api.web.util.RequestData;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/asker", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Asker", description = "Endpoints for listing askers")
public class AskerController {
    private final AskerService askerService;

    @Operation(summary = "List askers", description = "Lists askers with at least one pending question")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
    })
    @GetMapping("/list")
    public ResponseEntity<AskerListResponse> list() {
        log.info("listing_clients");
        var askers = askerService.listAllWithPendingTickets();
        var dtos = askers.stream().map(
                asker -> {
                    String askerName = asker.getName();
                    String askerChatId = asker.getChatId();
                    int numOfPendingTickets = (int) asker.getTickets()
                            .stream()
                            .filter(ticket -> ticket.getTicketStatus() == TicketStatus.PENDING)
                            .count();
                    return AskerWithNumOfPendingTicketsDto.builder()
                            .askerName(askerName)
                            .askerChatId(askerChatId)
                            .numOfPendingTickets(numOfPendingTickets)
                            .build();
                }
        ).toList();
        var response = AskerListResponse.builder()
                .askerWithNumOfPendingTicketsDtoList(dtos)
                .build();
        return ResponseEntity.ok(response);
    }

}