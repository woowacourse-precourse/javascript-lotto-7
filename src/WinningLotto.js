import Lotto from './Lotto.js';
import Validator from './utils/Validator.js';
import { ERROR_MESSAGES } from './constants/messages.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
    this.#bonusNumber = null;
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.#checkDuplicateBonusNum(bonusNumber);
    Validator.checkValidRange(bonusNumber, 1, 45, ERROR_MESSAGES.INVALID_LOTTO_RANGE);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #checkDuplicateBonusNum(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default WinningLotto;
