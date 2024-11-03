import { Console } from '@woowacourse/mission-utils';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Money from '../validation/Money.js';
import {
  countLotto,
  getRank,
  getProfit,
  getProfitRate,
} from '../utils/index.js';
import LottoController from './LottoController.js';
import Lotto from '../Lotto.js';
import BonusNumber from '../validation/BonusNumber.js';

class LottoMachine {
  winningNumbers;

  bonusNumber;

  money;

  constructor() {
    this.result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      0: 0,
    };
  }

  async start() {
    this.money = await this.handleMoneyInput(); // TODO : this.money로 변경
    const numOfLotto = countLotto(this.money);
    const lottoController = new LottoController(numOfLotto);
    Output.printLottos(lottoController.lottos, numOfLotto);

    this.winningNumbers = await this.handleWinningNumberInput();
    this.bonusNumber = await this.handleBonusNumberInput();
    this.checkMatch(lottoController);
    this.countRank(lottoController);
    this.printResult();
  }

  checkMatch(lottoController) {
    lottoController.checkNumberMatch(this.winningNumbers);
    lottoController.checkBonusMatch(this.bonusNumber);
  }

  countRank(lottoController) {
    lottoController.lottos.forEach((lotto) => {
      const rank = getRank(lotto.matchCount, lotto.bonusCount);
      this.result[rank] += 1;
    });
  }

  printResult() {
    const profit = getProfit(this.result);
    const profitRate = getProfitRate(profit, this.money);
    Output.printResultSummary(this.result, profitRate);
  }

  async handleMoneyInput() {
    let money;
    while (true) {
      money = await Input.requestMoney();
      try {
        const validMoney = Money.validate(money);
        return validMoney;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async handleWinningNumberInput() {
    let numbers;
    while (true) {
      try {
        numbers = await Input.requestWinningNumbers(); // string
        Lotto.empty(numbers);
        const numberArr = Lotto.delimiter(numbers);
        const validNumbers = new Lotto(numberArr);
        return validNumbers.getNumbers();
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async handleBonusNumberInput() {
    let bonusNumber;
    while (true) {
      bonusNumber = await Input.requestBonusNumber();
      try {
        const validBonusNumber = BonusNumber.validate(
          bonusNumber,
          this.winningNumbers,
        );
        return validBonusNumber;
      } catch (error) {
        Console.print(error);
      }
    }
  }
}
export default LottoMachine;
