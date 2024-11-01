import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT } from './Constants/Message.js';
import {
  BasicValidation,
  WinningNumberValidation,
  BonusNumberValidation,
} from './Validation.js';
import Lotto from './Domain/Lotto.js';
import Input from './view/Input.js';

class App {
  #input;

  constructor() {
    this.#input = new Input();
  }

  validatePurchaseMoney(input) {
    BasicValidation.InputBlank(input);

    const number = Number(input);

    BasicValidation.InputNumberType(number);
    BasicValidation.PurchaseUnit(number);
  }

  async getPurchaseMoney() {
    while (true) {
      try {
        const purchaseMoney = await thirdWinner.#input.purchaseMoney();
        this.validatePurchaseMoney(purchaseMoney);

        return Number(purchaseMoney);
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  validateWinningNumbers(input) {
    BasicValidation.InputBlank(input);
    WinningNumberValidation.InputSeparator(input);

    const numbers = input.split(',').map((number) => {
      return Number(number);
    });

    WinningNumberValidation.InputOverlap(numbers);
    BasicValidation.InputLength(numbers, 6);

    numbers.forEach((number) => {
      BasicValidation.InputNumberType(number);
      WinningNumberValidation.InputLottoRange(number);
    });
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#input.winningNumbers();

        this.validateWinningNumbers(winningNumbers);

        const winningNumbersArray = winningNumbers
          .split(',')
          .map((winningNumber) => {
            return Number(winningNumber);
          });

        return winningNumbersArray;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }

  validateBonusNumber(winningNumbers, input) {
    BasicValidation.InputBlank(input);

    const number = Number(input);

    BasicValidation.InputNumberType(number);
    BasicValidation.InputLength(number, 1);
    BonusNumberValidation.InputOverlap(number, winningNumbers);
  }

  async getBounsNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();

        this.validateBonusNumber(winningNumbers, bonusNumber);

        return bonusNumber;
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
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    purchaseTickets.forEach((purchaseTickets) => {
      const rank = purchaseTickets.calculateWinningLotto(
        winningNumbers,
        bonusNumber
      );

      results[rank] += 1;
    });

    return results;
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

  printWinningResult(results) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${results['5']}개`);
    Console.print(`4개 일치 (50,000원) - ${results['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results['3']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results['2']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results['1']}개`);
  }
  printTotalReturn(totalReturn) {
    Console.print(totalReturn);
    Console.print(`총 수익률은 ${Math.round(totalReturn * 100) / 100}%입니다.`);
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

    const totalReturn = this.calculateTotalReturn(results, purchaseMoney);
    this.printWinningResult(results);
    this.printTotalReturn(totalReturn);
  }
}

export default App;
