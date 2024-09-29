package misis.loft.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
public class Ticket {
    @Id
    @GeneratedValue
    @JsonIgnore
    @ToString.Include
    private Long id;
    @Schema(example = "id_chat")
    @JsonIgnore
    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name = "asker_id", referencedColumnName = "id")
    private Asker asker;
    @Schema(example = "Как играть в монополию?")
    @NotNull
    private String question;
    @Schema(example = "Согласно правилам монополии, в ней ...")
    private String answer;
    @Schema(example = "PENDING/CLOSED")
    @NotNull
    private TicketStatus ticketStatus;
    {
        ticketStatus = TicketStatus.PENDING;
    }
}