import { Input } from './Input.js';
import { Validation } from './Validation.js';
import { Calculation } from './Calculation.js';
import { Output } from './Output.js';
import { Console } from '@woowacourse/mission-utils';
import { Statistics } from './Statistics.js';

export class LottoMachine {
  #input;
  #validation;
  #calculation;
  #output;
  #statistics;

  constructor() {
    this.#input = new Input();
    this.#validation = new Validation();
    this.#calculation = new Calculation();
    this.#output = new Output();
    this.#statistics = new Statistics();
  }

  async inputAttemptPurchasePrice() {
    try {
      const purchasePrice = await this.#input.getPurchasePrice();
      this.#validation.validatePurchasePrice(purchasePrice);

      return purchasePrice;
    } catch (error) {
      Console.print(error.message);

      return await this.inputAttemptPurchasePrice();
    }
  }

  async inputAttemptWinningNumbers() {
    try {
      const winningNumbers = await this.#input.getWinningNumbers();
      const winningNumArr = winningNumbers.split(',').map(Number);
      this.#validation.validateWinningNumbers(winningNumArr);

      return winningNumArr;
    } catch (error) {
      Console.print(error.message);

      return await this.inputAttemptWinningNumbers();
    }
  }

  async inputAttemptBonusNumber(winningNumArr) {
    try {
      const bonusNumber = await this.#input.getBonusNumber();
      this.#validation.validateBonusNumber(bonusNumber, winningNumArr);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);

      return await this.inputAttemptBonusNumber(winningNumArr);
    }
  }

  async run() {
    const purchasePrice = await this.inputAttemptPurchasePrice();

    const lottoTicketCount = this.#calculation.getLottoTicketCount(purchasePrice);
    this.#output.printLottoTicketCount(lottoTicketCount);

    const lottoTicket = this.#output.printLottoTicket(lottoTicketCount);

    const winningNumArr = await this.inputAttemptWinningNumbers();

    const bonusNumber = await this.inputAttemptBonusNumber(winningNumArr);

    const rankCounts = this.#statistics.findWinnerRank(lottoTicket, winningNumArr, bonusNumber);

    const rateOfReturn = this.#calculation.getRateOfReturn(rankCounts, purchasePrice);

    this.#output.printWinnerRank(rankCounts);
    this.#output.printRateOfReturn(rateOfReturn);
  }
}
