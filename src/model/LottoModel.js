import { LOTTO } from '../constant/constant.js';
import { getNumbersInRange } from '../utils/rangeUtils.js';
import Money from '../vo/Money.js';
import Lotto from '../vo/Lotto.js';
import WinningNumbers from '../vo/WinningNumbers.js';
import BonusNumber from '../vo/BounusNumber.js';
import Result from '../vo/Result.js';

class LottoModel {
  #lottoAmount;
  #lottoSet;
  #winningNumbers;
  #bonusNumber;
  #result;

  getLottoAmount() {
    return this.#lottoAmount;
  }

  calculateLottoAmount(amount) {
    const money = new Money(amount);
    this.#lottoAmount = money.getAmount() / LOTTO.PRICE;
  }

  getLottoSet() {
    return this.#lottoSet;
  }

  createLottoSet() {
    this.#lottoSet = Array.from({ length: this.#lottoAmount }, () =>
      this.#createLotto()
    );
  }

  #createLotto() {
    const lottoNumbers = getNumbersInRange();

    return new Lotto(lottoNumbers);
  }

  getWinningNumbers() {
    return this.#winningNumbers.getWinningNumbers();
  }

  getBonusNumber() {
    return this.#bonusNumber.getBonusNumber();
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = new WinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = new BonusNumber(bonusNumber, this.#winningNumbers);
  }

  getResults() {
    const statistics = this.#result.getStatistics();
    const profitRate = this.#result.getProfitRate();

    return { statistics, profitRate };
  }

  calculateResult() {
    this.#result = new Result(
      this.#lottoAmount,
      this.#lottoSet,
      this.#winningNumbers,
      this.#bonusNumber
    );
  }
}

export default LottoModel;
