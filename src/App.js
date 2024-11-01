import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT } from './Constants/Message.js';
import { BasicValidation } from './Validation.js';
import Lotto from './Domain/Lotto.js';

class App {
  #basicValidation;

  constructor() {
    this.#basicValidation = new BasicValidation();
  }

  async getPurchaseMoney() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT.purchaseMoney);
        this.#basicValidation.PurchaseUnit(input.trim());
        return Number(input);
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  drawRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  singleLottoTicket() {
    const numbers = this.drawRandomLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets(purchaseMoney) {
    const purchaseTickets = Array.from({ length: purchaseMoney / 1000 }).map(
      () => {
        return this.singleLottoTicket();
      }
    );

    return purchaseTickets;
  }

  printPurchaseLottoCount(purchaseTickets) {
    Console.print(`${purchaseTickets.length}${OUTPUT.ticketNumber}`);
  }

  printPurchaseLottoNumbers(purchaseTickets) {
    purchaseTickets.forEach((purchaseTickets) =>
      purchaseTickets.printLottoNumbers()
    );
  }

  async run() {
    const purchaseMoney = await this.getPurchaseMoney();
    const purchaseTickets = this.purchaseLottoTickets(purchaseMoney);

    this.printPurchaseLottoCount(purchaseTickets);
    this.printPurchaseLottoNumbers(purchaseTickets);
  }
}

export default App;
