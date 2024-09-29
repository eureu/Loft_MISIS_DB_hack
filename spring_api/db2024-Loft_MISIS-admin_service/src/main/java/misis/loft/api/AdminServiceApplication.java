package misis.loft.api;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import lombok.extern.slf4j.Slf4j;
import misis.loft.api.model.Asker;
import misis.loft.api.service.AskerService;
import misis.loft.api.service.AuthenticationService;
import misis.loft.api.service.TicketService;
import misis.loft.api.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;


@SpringBootApplication
@Slf4j
public class AdminServiceApplication extends SpringBootServletInitializer {

    @Value("${secret.registration}")
    private String secretRegistration;

    public static void main(String[] args) {
        SpringApplication.run(AdminServiceApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ApplicationListener<ContextRefreshedEvent> applicationListener() {
        return event -> {
            ApplicationContext applicationContext = event.getApplicationContext();
            applicationContext.getBean(RequestMappingHandlerMapping.class).getHandlerMethods()
                    .forEach((a, b) -> log.info(b.toString()));
        };
    }

    public @Bean OpenAPI noteAPI() {
        return new OpenAPI()
                .info(
                        new Info()
                                .title("Админ сервис")
                                .description("Сервис панели администратора")
                );
    }

    @Bean
    public CommandLineRunner commandLineRunner(AuthenticationService authenticationService,
                                               TicketService ticketService,
                                               AskerService askerService) {
        return args -> {
            Asker createdAsker1 = askerService.save("Анна Сергеевна", "a47291");
            ticketService.save("Как добавить субтитры к видео на RuTube?", createdAsker1.getId());
            ticketService.save("Что делать, если видео долго загружается на RuTube?", createdAsker1.getId());
            ticketService.save("Как включить уведомления о новых комментариях на RuTube?", createdAsker1.getId());

            Asker createdAsker2 = askerService.save("Игорь Александрович", "i83429");
            ticketService.save("Какие видео нарушают правила RuTube?", createdAsker2.getId());

            Asker createdAsker3 = askerService.save("Ольга Дмитриевна", "o19384");
            ticketService.save("Почему видео не отображается на главной странице RuTube?", createdAsker3.getId());
            ticketService.save("Как поменять обложку видео на RuTube?", createdAsker3.getId());
            ticketService.save("Как включить возрастное ограничение на видео в RuTube?", createdAsker3.getId());

            Asker createdAsker4 = askerService.save("Евгений Николаевич", "e84729");
            ticketService.save("Как подать жалобу на пользователя RuTube?", createdAsker4.getId());
            ticketService.save("Можно ли отключить комментарии на RuTube?", createdAsker4.getId());
            ticketService.save("Как посмотреть статистику просмотров на RuTube?", createdAsker4.getId());
            ticketService.save("Почему не отображаются просмотры видео на RuTube?", createdAsker4.getId());
            ticketService.save("Как получить верификацию на RuTube?", createdAsker4.getId());
            ticketService.save("Почему мои видео не показываются в поиске RuTube?", createdAsker4.getId());

            Asker createdAsker5 = askerService.save("Михаил Петрович", "m58271");
            ticketService.save("Как изменить язык интерфейса RuTube?", createdAsker5.getId());

            Asker createdAsker6 = askerService.save("Наталья Ивановна", "n93047");
            ticketService.save("Как сделать видео доступным только по ссылке на RuTube?", createdAsker6.getId());
            ticketService.save("Почему RuTube не позволяет загружать видео?", createdAsker6.getId());
            ticketService.save("Как удалить комментарии под видео на RuTube?", createdAsker6.getId());
            ticketService.save("Как включить функцию авто-повтора для видео на RuTube?", createdAsker6.getId());

            Asker createdAsker7 = askerService.save("Дмитрий Юрьевич", "d49283");
            ticketService.save("Что делать, если RuTube не поддерживает формат моего видео?", createdAsker7.getId());
            ticketService.save("Как настроить уведомления на RuTube?", createdAsker7.getId());
            ticketService.save("Как скрыть лайки и дизлайки на моем видео в RuTube?", createdAsker7.getId());
            ticketService.save("Как посмотреть кто оставил комментарии на RuTube?", createdAsker7.getId());
            ticketService.save("Можно ли стримить через RuTube?", createdAsker7.getId());
            ticketService.save("Почему пропали подписчики с канала на RuTube?", createdAsker7.getId());

            Asker createdAsker8 = askerService.save("Александр Михайлович", "a32845");
            ticketService.save("Как загрузить длинное видео на RuTube?", createdAsker8.getId());
            ticketService.save("Как увеличить просмотры видео на RuTube?", createdAsker8.getId());
            ticketService.save("Почему мое видео недоступно в других странах на RuTube?", createdAsker8.getId());
            ticketService.save("Что такое премиум-аккаунт на RuTube?", createdAsker8.getId());

            Asker createdAsker9 = askerService.save("Олег Андреевич", "o58291");
            ticketService.save("Как включить комментарии для всех на RuTube?", createdAsker9.getId());
            ticketService.save("Почему видео удалили из трендов на RuTube?", createdAsker9.getId());
            ticketService.save("Как настроить канал для детей на RuTube?", createdAsker9.getId());
            ticketService.save("Можно ли ограничить загрузку видео по времени на RuTube?", createdAsker9.getId());
            ticketService.save("Как связаться с поддержкой RuTube напрямую?", createdAsker9.getId());

            Asker createdAsker10 = askerService.save("Светлана Константиновна", "s19473");
            ticketService.save("Что делать, если видео не отображается на RuTube после загрузки?", createdAsker10.getId());
            ticketService.save("Как сохранить видео на телефон с RuTube?", createdAsker10.getId());

            Asker createdAsker11 = askerService.save("Василий Иванович", "v72938");
            ticketService.save("Как загрузить обложку на RuTube видео?", createdAsker11.getId());
            ticketService.save("Как удалить старые видео с моего канала на RuTube?", createdAsker11.getId());
            ticketService.save("Почему RuTube не загружает видео с моего устройства?", createdAsker11.getId());
            ticketService.save("Как установить рекламные паузы в видео на RuTube?", createdAsker11.getId());

            Asker createdAsker12 = askerService.save("Екатерина Андреевна", "e81243");
            ticketService.save("Почему мое видео отображается с низким качеством на RuTube?", createdAsker12.getId());

            Asker createdAsker13 = askerService.save("Людмила Петровна", "l27394");
            ticketService.save("Как заблокировать пользователя на RuTube?", createdAsker13.getId());
            ticketService.save("Как отключить рекламу на RuTube?", createdAsker13.getId());
            ticketService.save("Как включить встроенные субтитры на RuTube?", createdAsker13.getId());
            ticketService.save("Почему RuTube не показывает уведомления о новых видео?", createdAsker13.getId());


            try {
                authenticationService.register("@test", "test", "Мистер тест");

            } catch (Exception e) {
                log.error("error_on_command_line_runner");
                log.error(e.getMessage() + " " + e.getCause());
            }
        };
    }

}
