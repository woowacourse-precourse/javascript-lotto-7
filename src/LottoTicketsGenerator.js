import { MissionUtils } from "@woowacourse/mission-utils";

class LottoTicketsGenerator {
  #generatedLottoNumbers;

  constructor(ticketCount) {
    this.#generatedLottoNumbers = this.generateAllTickets(ticketCount);
  }

  generateSingleTicket() {
    const uniqueNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return uniqueNumbers.sort((a, b) => a - b);
  }
  generateAllTickets(ticketCount) {
    const tickets = [];
    for(let cnt = 0 ; cnt < ticketCount ; cnt++) {
      tickets.push(this.generateSingleTicket());
    }
    return tickets;
  }
}

export default LottoTicketsGenerator;