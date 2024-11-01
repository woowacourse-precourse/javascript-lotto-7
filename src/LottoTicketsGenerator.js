import { MissionUtils } from "@woowacourse/mission-utils";

class LottoTicketsGenerator {
  #generatedLottoNumbers;

  constructor(ticketAmount) {
    this.#generatedLottoNumbers = this.generateAllTickets(ticketAmount);
  }
  
  generateAllTickets(ticketAmount) {
    const tickets = [];
    for(let cnt = 0 ; cnt < ticketAmount ; cnt++) {
      tickets.push(this.generateSingleTicket());
    }
    return tickets;
  }
  generateSingleTicket() {
    const uniqueNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return uniqueNumbers.sort((a, b) => a - b);
  }
}

export default LottoTicketsGenerator;