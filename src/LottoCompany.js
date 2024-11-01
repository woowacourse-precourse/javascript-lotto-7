import InputManager from './InputManager.js';
import { generateMapWithZeroValue } from './lib/utils.js';

class LottoCompany {
  static #RANKS = [1, 2, 3, 4, 5];

  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber(this.#winningNumbers);
  }

  checkWinningLottos(lottos) {
    const lottoWinningMap = generateMapWithZeroValue(LottoCompany.#RANKS);
    lottos.forEach((lotto) => {
      const rank = lotto.checkWinning(this.#winningNumbers, this.#bonusNumber);
      if (lottoWinningMap.has(rank))
        lottoWinningMap.set(rank, lottoWinningMap.get(rank) + 1);
    });

    return lottoWinningMap;
  }
}

export default LottoCompany;
