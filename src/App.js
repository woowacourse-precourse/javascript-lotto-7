import { Console, Random } from "@woowacourse/mission-utils";
import { getTicketCount } from "./utils/InputHandler.js";

class App {
  async run() {
    // 구입금액 입력받음
    const ticketCount = await getTicketCount();

    // 티켓 생성
    Console.print(`\n${ticketCount}개를 구매했습니다.`);

    const tickets = generateTickets(ticketCount);
    tickets.forEach(ticket => {
      Console.print(`[${ticket.join(", ")}]`);
    });
  }
}

export default App;


function generateTickets(ticketCount) {
  const tickets = [];

  for (let i = 0; i < ticketCount; i++) {
    let ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    ticket = ticket.sort((a, b) => a - b);
    tickets.push(ticket);
  }

  return tickets;
}