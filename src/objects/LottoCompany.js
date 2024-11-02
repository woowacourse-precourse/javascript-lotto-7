import { InputManager } from '../helpers/index.js';

class LottoCompany {
  static #RANKS = [1, 2, 3, 4, 5];

  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber(this.#winningNumbers);
  }

  checkWinningLottos(lottos) {
    const lottoWinningMap = LottoCompany.#generateBlankLottos(
      LottoCompany.#RANKS,
    );
    lottos.forEach((lotto) => {
      const rank = lotto.checkWinning(this.#winningNumbers, this.#bonusNumber);
      if (lottoWinningMap.has(rank))
        lottoWinningMap.set(rank, lottoWinningMap.get(rank) + 1);
    });

    return lottoWinningMap;
  }

  static #generateBlankLottos(keyArray) {
    return new Map(keyArray.map((key) => [key, 0]));
  }
}

export default LottoCompany;
