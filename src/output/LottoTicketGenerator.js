import { MissionUtils, Console } from '@woowacourse/mission-utils';

class LottoTicketGenerator {
  static generateLottoTickets(purchaseAmount) {
    const ticketCount = purchaseAmount / 1000;
    const tickets = [];

    Array.from({ length: ticketCount }).forEach(() => {
      const ticket = this.generateRandomNumbers();
      tickets.push(ticket);
    });

    return tickets;
  }

  static generateRandomNumbers() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }
}

export default LottoTicketGenerator;
