import { InputManager } from '../helpers/index.js';
import LottoResult from './LottoResult.js';

class LottoCompany {
  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputManager.getWinningNumbers();
    this.#bonusNumber = await InputManager.getBonusNumber(this.#winningNumbers);
  }

  checkWinningLotto(lottos) {
    return lottos.reduce((lottoResult, lotto) => {
      const rank = lotto.checkWinning(this.#winningNumbers, this.#bonusNumber);
      lottoResult.addWinning(rank);

      return lottoResult;
    }, new LottoResult());
  }
}

export default LottoCompany;
