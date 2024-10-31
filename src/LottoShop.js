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

  static calculateLottoPrizeMoney(lottoWinningMap) {
    LOTTO_INFORMATION_ARRAY.reduce(
      (prev, lottoInformation) =>
        prev +
        lottoWinningMap.get(lottoInformation.rank) *
          lottoInformation.prizeMoney +
        prev,
      0,
    );
  }

  static getLottoInformation(rank) {
    LOTTO_INFORMATION_ARRAY.find((lotto) => lotto.rank === rank);
  }

  static calculateRateOfReturn(lottoPrizeMoney, purchasePrice) {
    return parseFloat(
      calculateRateOfReturn(lottoPrizeMoney, purchasePrice).toFixed(2),
    );
  }
}

export default LottoShop;
