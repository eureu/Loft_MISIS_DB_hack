package misis.loft.api.service;

import lombok.AllArgsConstructor;
import misis.loft.api.exception.AskerNotFoundException;
import misis.loft.api.exception.TicketNotFound;
import misis.loft.api.model.Asker;
import misis.loft.api.model.Ticket;
import misis.loft.api.model.TicketStatus;
import misis.loft.api.repository.AskerRepository;
import misis.loft.api.repository.TicketRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TicketService {
    private final TicketRepository ticketRepository;
    private final AskerRepository askerRepository;
    private final AnswerService answerService;

    public List<Ticket> getTicketsByAsker(Long askerId) {
        return ticketRepository.findByAskerId(askerId);
    }

    public Ticket save(String question, Long askerId) throws AskerNotFoundException {
        Asker existingAsker = askerRepository.findById(askerId).orElseThrow(AskerNotFoundException::new);
        Ticket ticket = Ticket.builder()
                .question(question)
                .asker(existingAsker)
                .ticketStatus(TicketStatus.PENDING)
//                .answer(answerService.sendPredictRequest(question).getResponse())
                .build();
        return ticketRepository.save(ticket);
    }
}
