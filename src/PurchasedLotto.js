import { MissionUtils } from "@woowacourse/mission-utils";
import errorMessages from "./constants/errorMessages.js";
import Lotto from "./Lotto.js";

class PurchasedLotto {
  constructor(purchaseAmount) {
    this.#validatePurchaseAmount(purchaseAmount);
    this.numberOfTickets = purchaseAmount / 1000;
    this.tickets = this.#getTicketsArray(this.numberOfTickets);
  }

  #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0)
      throw new Error(errorMessages.INVALID_AMOUNT);
  }

  #getTicketsArray(numberOfTickets) {
    let tickesArray = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const lottoTicket = new Lotto(this.#getRandomNumbers());
      tickesArray.push(lottoTicket);
    }
    return tickesArray;
  }

  #getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  getNumberOfTickets() {
    return this.numberOfTickets;
  }

  getTickets() {
    return this.tickets.map((ticket) => ticket.getNumbers());
  }
}

export default PurchasedLotto;
