import { Console, Random } from '@woowacourse/mission-utils';
import { InputPrompts, Lotto, OutputMessages } from '../resources/Constants.js';
import purchaseAmountValidator from '../validation/purchaseAmountValidator.js';

class LottoController {
  #purchaseAmount;
  #lottoTickets;

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  setPurchaseAmount(purchaseAmount) {
    purchaseAmountValidator(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  isEmptyPurchaseAmount() {
    return this.#purchaseAmount === undefined || this.#purchaseAmount === null;
  }

  isEmptyLottoTickets() {
    return this.#lottoTickets === undefined || this.#lottoTickets === null;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  #sortAscending(lottoTickets) {
    return lottoTickets.map((ticket) => ticket.slice().sort((a, b) => a - b));
  }

  generateLottoTickets() {
    if (!this.isEmptyPurchaseAmount()) {
      const ticketCount = this.#purchaseAmount / 1000;

      const lottoTickets = Array.from({ length: ticketCount }, () =>
        Random.pickUniqueNumbersInRange(
          Lotto.MIN_NUMBER,
          Lotto.MAX_NUMBER,
          Lotto.COUNT,
        ),
      );

      this.#lottoTickets = this.#sortAscending(lottoTickets);
    }
  }

  displayLottoTickets() {
    if (!this.isEmptyLottoTickets()) {
      const ticketCount = this.#purchaseAmount / 1000;

      Console.print(OutputMessages.PURCHASE_MESSAGE(ticketCount));

      this.#lottoTickets.forEach((lottoTicket) => {
        Console.print(lottoTicket);
      });
    }
  }

  async promptPurchaseAmount() {
    try {
      const newPurchaseAmount = await Console.readLineAsync(
        InputPrompts.purchaseAmount,
      );

      this.setPurchaseAmount(newPurchaseAmount);
    } catch (error) {
      Console.print(`${error.message}\n`);
      await this.promptPurchaseAmount();
    }
  }
}

export default LottoController;
