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

  calculateWinningResult(purchaseTickets, winningNumbers, bonusNumber) {
    const results = purchaseTickets.map((purchaseTickets) => {
      return purchaseTickets.calculateWinningLotto(winningNumbers, bonusNumber);
    });

    return results.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }

  calculateTotalReturn(results, purchaseMoney) {
    const total =
      results['1'] * 2000000000 +
      results['2'] * 30000000 +
      results['3'] * 1500000 +
      results['4'] * 50000 +
      results['5'] * 5000;
    return (total / purchaseMoney) * 100;
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

    const results = this.calculateWinningResult(
      purchaseTickets,
      winningNumbers,
      bonusNumber
    );

    const totalReturn = this.calculateTotalReturn(results);
  }
}

export default App;
