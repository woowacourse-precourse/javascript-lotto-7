import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_RULES_CONSTANTS } from "./constants/lottoRules";

class LottoTicketsGenerator {
  #generatedLottoNumbers;

  constructor(ticketAmount) {
    this.#generatedLottoNumbers = this.generateAllTickets(ticketAmount);
  }

  get tickets() {
    return this.#generatedLottoNumbers;
  }
  
  generateAllTickets(ticketAmount) {
    const tickets = [];
    for(let cnt = 0 ; cnt < ticketAmount ; cnt++) {
      tickets.push(this.generateSingleTicket());
    }
    return tickets;
  }
  generateSingleTicket() {
    const uniqueNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_RULES_CONSTANTS.lotto_min_number, 
      LOTTO_RULES_CONSTANTS.lotto_max_number, 
      LOTTO_RULES_CONSTANTS.lotto_length
    );
    return uniqueNumbers.sort((a, b) => a - b);
  }
}

export default LottoTicketsGenerator;