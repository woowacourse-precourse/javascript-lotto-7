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

  generateLottoTickets() {
    if (!this.isEmptyPurchaseAmount()) {
      const ticketCount = this.#purchaseAmount / 1000;

      this.#lottoTickets = Array.from({ length: ticketCount }, () =>
        Random.pickUniqueNumbersInRange(
          Lotto.MIN_NUMBER,
          Lotto.MAX_NUMBER,
          Lotto.COUNT,
        ),
      );
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
    const newPurchaseAmount = await Console.readLineAsync(
      InputPrompts.purchaseAmount,
    );

    purchaseAmountValidator(newPurchaseAmount);
    this.setPurchaseAmount(newPurchaseAmount);
  }
}

export default LottoController;
