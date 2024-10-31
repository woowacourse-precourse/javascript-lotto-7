import { MissionUtils } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import { generateMapWithZeroValue } from './lib/utils.js';
import Lotto from './Lotto.js';

class LottoShop {
  static #LOTTO_PRICE = 1_000;
  static #MIN_LOTTO_NUMBER = 1;
  static #MAX_LOTTO_NUMBER = 45;
  static #COUNT_LOTTO_NUMBER = 6;
  static #RANKS = [1, 2, 3, 4, 5];

  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber();
  }

  static orderLottos(purchasePrice) {
    const lottoCount = purchasePrice / this.#LOTTO_PRICE;
    const lottos = this.#generateLottos(lottoCount);

    return lottos;
  }

  checkWinningLottos(lottos) {
    const lottoWinningMap = generateMapWithZeroValue(LottoShop.#RANKS);
    lottos.forEach((lotto) => {
      const rank = lotto.checkWinning(this.#winningNumbers, this.#bonusNumber);
      lottoWinningMap.set(rank, lottoWinningMap.get(rank) + 1);
    });

    return lottoWinningMap;
  }

  static #generateLottos(lottoCount) {
    const lottos = new Array(lottoCount).fill().map(() => {
      const lottoNumbers = this.#generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      return lotto;
    });

    return lottos;
  }

  static #generateLottoNumbers() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      this.#MIN_LOTTO_NUMBER,
      this.#MAX_LOTTO_NUMBER,
      this.#COUNT_LOTTO_NUMBER,
    );

    return lotto;
  }
}

export default LottoShop;
