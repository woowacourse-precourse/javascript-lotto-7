import InputManager from './InputManager.js';
import { LOTTO_INFORMATION_ARRAY } from './lib/constants.js';
import {
  calculateRateOfReturn,
  generateMapWithZeroValue,
} from './lib/utils.js';
import Lotto from './Lotto.js';

class LottoShop {
  static #lottoPrice = 1_000;

  #winningNumberArray;
  #bonusNumber;

  async draw() {
    this.#winningNumberArray = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber();
  }

  static purchaseLottos(purchasePrice) {
    const lottoCount = purchasePrice / LottoShop.#lottoPrice;

    return this.#generateLottoArray(lottoCount);
  }

  static #generateLottoArray(lottoCount) {
    return new Array(lottoCount).fill().map(() => new Lotto());
  }

  checkWinningLottos(lottos) {
    const lottoWinningMap = generateMapWithZeroValue([1, 2, 3, 4, 5]);

    lottos.forEach((lotto) => {
      const lottoRank = lotto.checkWinning(
        this.#winningNumberArray,
        this.#bonusNumber,
      );

      lottoWinningMap.set(lottoRank, lottoWinningMap.get(lottoRank) + 1);
    });

    return lottoWinningMap;
  }
}

export default LottoShop;
