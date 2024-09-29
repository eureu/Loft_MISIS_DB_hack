package misis.loft.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
public class Asker {
    @Id
    @GeneratedValue
    @ToString.Include
    private Long id;
    @Schema(example = "Иван Васильевич")
    @NotNull
    private String name;
    @Schema(example = "id_chat")
    @NotNull
    private String chatId;
    @JsonIgnore
    @Builder.Default
    @OneToMany(mappedBy = "asker", fetch= FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ticket> tickets = new ArrayList<>();
}