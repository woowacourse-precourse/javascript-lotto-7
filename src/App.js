import { MissionUtils } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_ERROR,
  PURCHASE_AMOUNT_ERROR,
} from './constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT } from './constants/won.js';
import Lotto from './Lotto.js';
import { View } from './view/View.js';

class App {
  amount = null;
  winning = null;
  bonus = null;

  async run() {
    const view = new View();

    while (true) {
      try {
        if (this.amount === null) {
          this.amount = await view.promptPurchaseAmount();
          this.validationAmount(this.amount);

          const lottoCount = this.amount / ONE_LOTTO_AMOUNT;
          view.promptPurchaseLotto(lottoCount);

          const lottos = Array.from(
            { length: lottoCount },
            () => new Lotto(this.makeRandomNumbers())
          );

          lottos.forEach((lotto) => view.printLotto(lotto.getNumbers()));
        }

        if (this.winning === null) {
          const rawInput = await view.promptWinningNumbers();
          this.winning = new Lotto(this.parseNumbers(rawInput));
        }

        if (this.bonus === null) {
          this.bonus = await view.promptBonusNumber();
          this.validationBonus(this.bonus);
          this.checkBonusWithWinningnumbers(this.bonus);
        }

        break;
      } catch (error) {
        view.printErrorMessage(error.message);
      }
    }
  }

  validationAmount(amount) {
    if (isNaN(amount)) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_NUMBER);
    if (amount <= 0) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_POSITIVE);
    if (amount % ONE_LOTTO_AMOUNT !== 0)
      throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND);
  }

  validationBonus(bonus) {
    if (isNaN(bonus)) throw new Error(BONUS_NUMBER_ERROR.NOT_NUMBER);
    if (bonus < 1 || bonus > 45) throw new Error(BONUS_NUMBER_ERROR.NOT_RANGE);
  }

  checkBonusWithWinningnumbers(bonus) {
    if (this.winning.getNumbers().includes(Number(bonus)))
      throw new Error(BONUS_NUMBER_ERROR.NOT_DUPLICATED);
  }

  parseNumbers(numbers) {
    return numbers.split(',').map((number) => parseInt(number.trim(), 10));
  }

  makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
}

export default App;
