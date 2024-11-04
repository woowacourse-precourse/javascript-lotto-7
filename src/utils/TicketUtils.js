import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

// 랜덤으로 티켓을 뽑는 함수
export function generateTickets(ticketCount) {
  const tickets = [];

  for (let i = 0; i < ticketCount; i++) {
    let ticket = Random.pickUniqueNumbersInRange(1, 45, 6);
    ticket = ticket.sort((a, b) => a - b);
    const lotto = new Lotto(ticket);
    tickets.push(lotto.getNumbers());
  }

  return tickets;
}