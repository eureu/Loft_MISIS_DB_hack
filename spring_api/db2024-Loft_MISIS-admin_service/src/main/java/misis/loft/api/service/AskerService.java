package misis.loft.api.service;

import lombok.AllArgsConstructor;
import misis.loft.api.exception.UserNotFoundException;
import misis.loft.api.model.Asker;
import misis.loft.api.model.Role;
import misis.loft.api.model.TicketStatus;
import misis.loft.api.model.User;
import misis.loft.api.repository.AskerRepository;
import misis.loft.api.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AskerService {
    private final AskerRepository askerRepository;

    public List<Asker> listAllWithPendingTickets() {
        List<Asker> askers = askerRepository.findAll();
        return askers.stream().filter(
                asker1 -> asker1.getTickets().stream().anyMatch(
                        ticket -> ticket.getTicketStatus() == TicketStatus.PENDING
                )
        ).toList();
    }

    public Asker save(String name, String chatId) {
        Asker asker = Asker.builder()
                .name(name)
                .chatId(chatId)
                .build();
        return askerRepository.save(asker);
    }

    @Transactional
    public void save(Asker asker) {
        askerRepository.save(asker);
    }
}
