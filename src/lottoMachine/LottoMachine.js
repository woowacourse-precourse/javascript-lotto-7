import { Input } from './Input.js';
import { Validation } from './validation/Validation.js';
import { Calculation } from './Calculation.js';
import { Output } from './Output.js';
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { Statistics } from './Statistics.js';
import Lotto from '../Lotto.js';

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

  generateRandomlottoTicket(lottoTicketCount) {
    const lottoTicketArr = [];
    for (let i = 0; i < lottoTicketCount; i++) {
      const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNum = ticket.sort(function (a, b) {
        return a - b;
      });
      lottoTicketArr.push(new Lotto(sortedNum));
    }

    return lottoTicketArr;
  }

  async run() {
    const purchasePrice = await this.inputAttemptPurchasePrice();
    const lottoTicketCount = this.#calculation.getLottoTicketCount(purchasePrice);
    const lottoTicketArr = this.generateRandomlottoTicket(lottoTicketCount);
    this.#output.printLottoTicket(lottoTicketArr);

    const winningNumArr = await this.inputAttemptWinningNumbers();
    const bonusNumber = await this.inputAttemptBonusNumber(winningNumArr);

    const rankCounts = this.#statistics.findWinnerRank(lottoTicketArr, winningNumArr, bonusNumber);
    const rateOfReturn = this.#calculation.getRateOfReturn(rankCounts, purchasePrice);
    this.#output.printWinnerRank(rankCounts);
    this.#output.printRateOfReturn(rateOfReturn);
  }
}
