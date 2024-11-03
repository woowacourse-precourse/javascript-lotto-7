import { ERROR_MESSAGE } from "./constants/messages.js";
import { validateLottoNumber } from "./utils/validation.js";

class BonusNumber {
  #bonusNumber;

  constructor(winningLotto, number) {
    this.#validate(winningLotto, number);
    validateLottoNumber(number);
    this.#bonusNumber = number;
  }

  #validate(winningLotto, number) {
    if (winningLotto.hasSameNumber(number)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE);
    }
  }

  hasBonusNumberIn(array) {
    return array.includes(this.#bonusNumber);
  }
}

export default BonusNumber;
