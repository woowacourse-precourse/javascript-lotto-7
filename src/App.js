import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT, OUTPUT } from './Constants/Message.js';
import {
  BasicValidation,
  WinningNumberValidation,
  BonusNumberValidation,
} from './Validation.js';
import Lotto from './Domain/Lotto.js';
import Input from './view/Input.js';
import Output from './view/Output.js';

class App {
  #input;
  #output;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
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
        this.#output.error(err.message);
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
        this.#output.error(err.message);
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
        this.#output.error(err.message);
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

  async run() {
    const purchaseMoney = await this.getPurchaseMoney();
    const purchaseTickets = this.purchaseLottoTickets(purchaseMoney);

    this.#output.lottoTicketCount(purchaseTickets);
    this.#output.lottoTicketNumbers(purchaseTickets);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBounsNumber(winningNumbers);

    const results = this.calculateWinningResult(
      purchaseTickets,
      winningNumbers,
      bonusNumber
    );

    const totalReturn = this.calculateTotalReturn(results, purchaseMoney);
    this.#output.winningResult(results);
    this.#output.totalReturnResult(totalReturn);
  }
}

export default App;
