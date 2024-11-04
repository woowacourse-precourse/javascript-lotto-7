import { MissionUtils, Console } from '@woowacourse/mission-utils';

class LottoTicketGenerator {
  static generateLottoTickets(purchaseAmount) {
    const ticketCount = purchaseAmount / 1000;
    const tickets = [];

    Array.from({ length: ticketCount }).forEach(() => {
      const ticket = this.generateRandomNumbers();
      tickets.push(ticket);
    });

    this.displayLottoTickets(tickets);
    return tickets;
  }

  static generateRandomNumbers() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }

  static displayLottoTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.join(', ')}]`));
    Console.print('');
  }
}

export default LottoTicketGenerator;
