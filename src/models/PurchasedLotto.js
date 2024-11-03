// PurchasedLotto.js
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE_UNIT } from "../constants/lottoConstants.js";

class PurchasedLotto {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.numberOfTickets = this.#calculateNumberOfTickets(purchaseAmount);
    this.tickets = this.#getTicketsArray(this.numberOfTickets);
  }

  #calculateNumberOfTickets(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE_UNIT;
  }

  #getTicketsArray(numberOfTickets) {
    const ticketsArray = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const lottoTicket = new Lotto(this.#getRandomNumbers());
      ticketsArray.push(lottoTicket);
    }
    return ticketsArray;
  }

  #getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  getTickets() {
    return this.tickets.map((ticket) => ticket.getNumbers());
  }

  getPurchaseAmount() {
    return this.purchaseAmount;
  }

  printPurchasedLotto() {
    MissionUtils.Console.print(`${this.numberOfTickets}개를 구매했습니다.`);
    this.tickets.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });
  }
}

export default PurchasedLotto;
