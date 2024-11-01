import { ERROR_MSG } from '../Constants.js';
import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  setBonusNumber(number) {
    this.validateBonusNumberCount(number);
    super.validateRange(number);
    super.validateDuplicate(super.getNumbers().concat(number));

    this.#bonusNumber = number;
  }

  validateBonusNumberCount(number) {
    if (number.length !== 1) {
      throw new Error(ERROR_MSG.invalidBonusNumberCount);
    }
  }

  getbonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
