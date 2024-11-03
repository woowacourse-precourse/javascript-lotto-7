import { ERROR_MSG } from '../constants/constants.js';
import Lotto from './Lotto.js';

const BONUS_NUMBER_COUNT = 1;

class WinningLotto extends Lotto {
  #bonusNumber;

  setBonusNumber(number) {
    this.validateBonusNumberCount(number);
    super.validateRange(number);
    super.validateDuplicate(super.getNumbers().concat(number));

    this.#bonusNumber = number;
  }

  validateBonusNumberCount(number) {
    if (number.length !== BONUS_NUMBER_COUNT) {
      throw new Error(ERROR_MSG.invalidBonusNumberCount);
    }
  }

  getbonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
