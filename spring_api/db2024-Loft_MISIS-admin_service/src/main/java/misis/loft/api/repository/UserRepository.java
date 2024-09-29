package misis.loft.api.repository;

import misis.loft.api.model.Role;
import misis.loft.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByTgTag(String tgTag);

    @Query("select u from User u where u.role = :role")
    List<User> findByRole(@Param("role") Role role);

    @Query("select u from User u where u.role = :role and u.tgTag = :tgTag")
    Optional<User> findByRoleAndTgTag(@Param("role") Role role, @Param("tgTag") String tgTag);

    Optional<User> deleteByTgTag(String tgTag);
}
