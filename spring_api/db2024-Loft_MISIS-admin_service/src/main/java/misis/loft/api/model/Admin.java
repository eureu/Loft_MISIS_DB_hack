package misis.loft.api.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@EqualsAndHashCode(callSuper = true)
public class Admin extends User {
    @Schema(example = "Bill Edwards")
    @NotNull
    private String name;
    {
        setRole(Role.ADMIN);
    }
}
