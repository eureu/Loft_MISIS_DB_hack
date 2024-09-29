package misis.loft.api.repository;

import misis.loft.api.model.Asker;
import misis.loft.api.model.Role;
import misis.loft.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AskerRepository extends JpaRepository<Asker, Long> {

}
