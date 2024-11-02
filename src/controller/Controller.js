import { MissionUtils } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_ERROR,
  PURCHASE_AMOUNT_ERROR,
} from '../constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT, PROFITS } from '../constants/won.js';
import Lotto from '../Lotto.js';
import { View } from '../view/View.js';

class Controller {
  #amount = null;
  #lottos = [];
  #winning = null;
  #bonus = null;

  constructor() {
    this.view = new View();
  }

  async purchaseLotto() {
    if (this.#amount === null) {
      const rawAmount = await this.view.promptPurchaseAmount();
      this.#validationAmount(rawAmount);
      this.#amount = rawAmount;

      const lottoCount = this.#amount / ONE_LOTTO_AMOUNT;
      this.view.promptPurchaseLotto(lottoCount);

      this.#lottos = Array.from(
        { length: lottoCount },
        () => new Lotto(this.#makeRandomNumbers())
      );

      this.#lottos.forEach((lotto) => this.view.printLotto(lotto.getNumbers()));
    }
  }

  async setWinningNumbers() {
    if (this.#winning === null) {
      const rawInput = await this.view.promptWinningNumbers();
      this.#winning = new Lotto(this.#parseNumbers(rawInput));
    }
  }

  async setBonusNumber() {
    if (this.#bonus === null) {
      const rawBonus = await this.view.promptBonusNumber();
      this.#validationBonus(rawBonus);
      this.#checkBonusWithWinningnumbers(rawBonus);
      this.#bonus = rawBonus;
    }
  }

  async calculateStatistics() {
    const statistics = this.#makeStatistics();
    const totalProfit = this.#calculateProfit(statistics);
    const profitRate = Math.round((totalProfit / this.#amount) * 10000) / 100;

    this.view.printStatics(statistics, profitRate);
  }

  #makeStatistics() {
    const statistics = [0, 0, 0, 0, 0];
    const winningNumbers = this.#winning.getNumbers();

    this.#lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      let cnt = numbers.filter((num) => winningNumbers.includes(num)).length;

      if (cnt === 3) {
        statistics[0]++;
      } else if (cnt === 4) {
        statistics[1]++;
      } else if (cnt === 5) {
        if (numbers.includes(Number(this.#bonus))) {
          statistics[3]++;
        } else {
          statistics[2]++;
        }
      } else if (cnt === 6) {
        statistics[4]++;
      }
    });

    return statistics;
  }

  #calculateProfit(statistics) {
    const [three, four, five, fiveBonus, six] = statistics;

    const totalProfit =
      three * PROFITS.THREE +
      four * PROFITS.FOUR +
      five * PROFITS.FIVE +
      fiveBonus * PROFITS.FIVE_BONUS +
      six * PROFITS.SIX;

    return totalProfit;
  }

  #validationAmount(amount) {
    if (isNaN(amount)) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_NUMBER);
    if (amount <= 0) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_POSITIVE);
    if (amount % ONE_LOTTO_AMOUNT !== 0)
      throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND);
  }

  #validationBonus(bonus) {
    if (isNaN(bonus)) throw new Error(BONUS_NUMBER_ERROR.NOT_NUMBER);
    if (bonus < 1 || bonus > 45) throw new Error(BONUS_NUMBER_ERROR.NOT_RANGE);
  }

  #checkBonusWithWinningnumbers(bonus) {
    if (this.#winning.getNumbers().includes(Number(bonus)))
      throw new Error(BONUS_NUMBER_ERROR.NOT_DUPLICATED);
  }

  #makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  #parseNumbers(numbers) {
    return numbers.split(',').map((number) => parseInt(number.trim(), 10));
  }

  printError(errorMessage) {
    this.view.printErrorMessage(errorMessage);
  }
}

export default Controller;
