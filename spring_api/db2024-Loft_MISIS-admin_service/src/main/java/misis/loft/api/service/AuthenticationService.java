package misis.loft.api.service;

import lombok.AllArgsConstructor;
import misis.loft.api.exception.UserAlreadyExistsException;
import misis.loft.api.exception.UserNotFoundException;
import misis.loft.api.exception.WrongPasswordException;
import misis.loft.api.model.Admin;
import misis.loft.api.model.Role;
import misis.loft.api.model.User;
import misis.loft.api.repository.UserRepository;
import misis.loft.api.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional(isolation = Isolation.SERIALIZABLE)
    public void register(String tgTag, String password, String name) throws UserAlreadyExistsException {
        if (userRepository.findByTgTag(tgTag).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        Admin admin = Admin.builder()
                .tgTag(tgTag)
                .role(Role.ADMIN)
                .password(passwordEncoder.encode(password))
                .name(name)
                .build();
        userRepository.save(admin);
    }

    public User signIn(String tgTag, String password) throws UserNotFoundException, WrongPasswordException {
        User user = userRepository.findByTgTag(tgTag).orElseThrow(UserNotFoundException::new);
        boolean validPassword = passwordEncoder.matches(password, user.getPassword());
        if (!validPassword) {
            throw new WrongPasswordException();
        }
        return user;
    }

    public String authenticate(String tgTag, String password) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        tgTag,
                        password
                )
        );
        var user = userRepository.findByTgTag(tgTag).orElseThrow();
        return jwtService.generateToken(user);
    }
}
