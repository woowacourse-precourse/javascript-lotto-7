import { MissionUtils } from '@woowacourse/mission-utils';
import { PURCHASE_AMOUNT_ERROR } from './constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT } from './constants/won.js';
import Lotto from './Lotto.js';
import { View } from './view/View.js';

class App {
  async run() {
    const view = new View();

    while (true) {
      try {
        const amount = await view.promptPurchaseAmount();
        this.validationAmount(amount);

        const lottoCount = amount / ONE_LOTTO_AMOUNT;
        view.promptPurchaseLotto(lottoCount);

        const lottos = Array.from(
          { length: lottoCount },
          () => new Lotto(this.makeRandomNumbers())
        );

        lottos.forEach((lotto) => view.printLotto(lotto.getNumbers()));

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

  makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
}

export default App;
