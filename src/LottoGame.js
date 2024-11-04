import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  #lottoCount;
  #lotto = [];
  #resultNumbers = [];
  #bonusNumber;
  #matchResults = [0, 0, 0, 0, 0, 0];
  #profitRate;

  constructor() {}

  async #getTotalCost() {
    while (true) {
      try {
        const totalCost = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        this.#isValidTotalCost(totalCost);
        this.#lottoCount = this.#getLottoCount(totalCost);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #generateLottoNumbers() {
    Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottoCount; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);
      num.sort((a, b) => a - b);
      this.#lotto.push(new Lotto(num));
      Console.print(`[${num.join(', ')}]`);
    }
  }

  #getLottoCount(totalCost) {
    return totalCost / 1000;
  }

  #isValidTotalCost(totalCost) {
    if (isNaN(totalCost)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    if (totalCost % 1000 !== 0) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }
}

export default LottoGame;