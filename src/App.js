import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT } from './Constants/Message.js';
import {
  BasicValidation,
  WinningNumberValidation,
  BonusNumberValidation,
} from './Validation.js';
import Lotto from './Domain/Lotto.js';

class App {
  #basicValidation;
  #winningNumberValidation;
  #bonusNumberValidation;

  constructor() {
    this.#basicValidation = new BasicValidation();
    this.#winningNumberValidation = new WinningNumberValidation();
    this.#bonusNumberValidation = new BonusNumberValidation();
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

  async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT.winningNumber);

        this.#winningNumberValidation.InputSeparator(input);

        const winningNumbers = input.split(',').map((number) => {
          return Number(number);
        });

        return winningNumbers;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  async getBounsNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(INPUT.bonusNumber);

        this.#bonusNumberValidation.InputOverlap(winningNumbers, bonusNumber);

        return bonusNumber;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  async run() {
    const purchaseMoney = await this.getPurchaseMoney();
    const purchaseTickets = this.purchaseLottoTickets(purchaseMoney);

    this.printPurchaseLottoCount(purchaseTickets);
    this.printPurchaseLottoNumbers(purchaseTickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBounsNumber(winningNumbers);
  }
}

export default App;
