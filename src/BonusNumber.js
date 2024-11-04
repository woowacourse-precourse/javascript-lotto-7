import { ERROR_MESSAGE } from "./constants/messages.js";
import { validateLottoNumber } from "./utils/validation.js";

class BonusNumber {
  #bonusNumber;

  constructor(number, winningLotto) {
    this.#validate(number, winningLotto);
    validateLottoNumber(number);
    this.#bonusNumber = number;
  }

  #validate(number, winningLotto) {
    if (winningLotto.has(number)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE);
    }
  }

  hasBonusNumberIn(array) {
    return array.includes(this.#bonusNumber);
  }
}

export default BonusNumber;
