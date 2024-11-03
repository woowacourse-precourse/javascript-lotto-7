import { MissionUtils } from "@woowacourse/mission-utils";
import errorMessages from "../constants/errorMessages.js";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE_UNIT } from "../constants/lottoConstants.js";

class PurchasedLotto {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.numberOfTickets = purchaseAmount / LOTTO_PRICE_UNIT;
    this.tickets = this.#getTicketsArray(this.numberOfTickets);
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

  getPurchaseAmount() {
    return this.purchaseAmount;
  }
}

export default PurchasedLotto;
