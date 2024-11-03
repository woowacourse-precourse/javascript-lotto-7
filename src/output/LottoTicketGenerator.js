import { MissionUtils, Console } from '@woowacourse/mission-utils';

class LottoTicketGenerator {
  static generateLottoTickets(purchaseAmount) {
    const ticketCount = purchaseAmount / 1000;
    const tickets = [];

    for (let i = 0; i < ticketCount; i++) {
      const ticket = this.generateRandomNumbers();
      tickets.push(ticket);
    }
    Console.print(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.join(', ')}]`));
    Console.print('');
    return tickets;
  }

  static generateRandomNumbers() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }
}

export default LottoTicketGenerator;
