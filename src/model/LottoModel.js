import { LOTTO } from '../constant/constant.js';
import { getNumbersInRange } from '../utils/rangeUtils.js';
import Money from '../vo/Money.js';
import Lotto from '../vo/Lotto.js';
import WinningNumbers from '../vo/WinningNumbers.js';
import BonusNumber from '../vo/BounusNumber.js';

class LottoModel {
  #lottoAmount;
  #lottoSet;
  #winningNumbers;
  #bonusNumber;

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
}

export default LottoModel;
