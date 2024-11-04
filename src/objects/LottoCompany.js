import { InputController } from '../controllers/index.js';
import { LottoResult } from './index.js';

class LottoCompany {
  #winningNumbers;
  #bonusNumber;

  async draw() {
    this.#winningNumbers = await InputController.getWinningNumbers();
    this.#bonusNumber = await InputController.getBonusNumber(
      this.#winningNumbers,
    );
  }

  getLottoResult(lottos) {
    return lottos.reduce((lottoResult, lotto) => {
      const rank = lotto.getRank(this.#winningNumbers, this.#bonusNumber);
      lottoResult.addWinning(rank);

      return lottoResult;
    }, new LottoResult());
  }
}

export default LottoCompany;
