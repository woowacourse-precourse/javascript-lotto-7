import { Console } from "@woowacourse/mission-utils";

class IOService {
  printTicketCount(ticketCount) {
    Console.print(`${ticketCount}개를 구매했습니다.`);
  }

  printTickets(tickets) {
    tickets.forEach((ticket) => {
      Console.print(ticket.getNumbers());
    });
  }
}

export default IOService;
