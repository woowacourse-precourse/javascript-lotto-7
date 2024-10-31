import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, AMOUNT } from './constants.js';

class LottoSetting {
  #numberOfLotto;

  constructor() {
    this.lottos = [];
  }

  async #getPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGES.lottoAmountInput + '\n');
  }

  #countNumberOfLotto(amount) {
    this.#numberOfLotto = amount / AMOUNT.lottoAmount;
  }

  #ascendinglottoNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }

  #createRandomLottos() {
    for (let i = 0; i < this.#numberOfLotto; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(this.#ascendinglottoNumber(lotto));
    }
  }

  async settingLotto() {
    const amount = await this.#getPurchaseAmount();
    this.#countNumberOfLotto(amount);
    this.#createRandomLottos();
  }
}

export default LottoSetting;
