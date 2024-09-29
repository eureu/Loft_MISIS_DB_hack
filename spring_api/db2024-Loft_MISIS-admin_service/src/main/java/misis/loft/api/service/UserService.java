package misis.loft.api.service;

import misis.loft.api.exception.UserNotFoundException;
import misis.loft.api.model.Role;
import misis.loft.api.model.User;
import misis.loft.api.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> listByRole(Role role) {
        return userRepository.findByRole(role);
    }

    @Transactional
    public void save(User user) {
        userRepository.save(user);
    }

    public User findByEmail(String email) throws UserNotFoundException {
        return userRepository.findByTgTag(email).orElseThrow(UserNotFoundException::new);
    }

    public Optional<User> findByEmailOptional(String email) {
        return userRepository.findByTgTag(email);
    }

    @Transactional
    public List<User> deleteByEmail(String email) throws UserNotFoundException {
        User deleted = userRepository.findByTgTag(email).orElseThrow(UserNotFoundException::new);
        return listByRole(deleted.getRole());
    }
}
