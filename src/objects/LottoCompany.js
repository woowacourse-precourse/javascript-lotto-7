import { InputManager } from '../helpers/index.js';
import LottosResult from './LottosResult.js';

class LottoCompany {
  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber(this.#winningNumbers);
  }

  checkWinningLottos(lottos) {
    const lottosResult = new LottosResult();

    lottos.forEach((lotto) => {
      const rank = lotto.checkWinning(this.#winningNumbers, this.#bonusNumber);
      lottosResult.addWinning(rank);
    });

    return lottosResult;
  }

  static #generateBlankLottos(keyArray) {
    return new Map(keyArray.map((key) => [key, 0]));
  }
}

export default LottoCompany;
