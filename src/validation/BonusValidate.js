import { BONUS_DUPLICATE, ERROR_MESSAGE, PRICE } from "../constants/error.js";
import Validate from "./Validate.js";

class BonusValidate extends Validate {
  validateBonus(bonus, lotto) {
    this.isEmpty(bonus);
    this.isZero(bonus);
    this.isNumber(bonus);
    this.#duplicate(bonus, lotto);
  }

  #duplicate(bonus, lotto) {
    if (lotto.includes(Number(bonus))) {
      throw new Error(ERROR_MESSAGE + BONUS_DUPLICATE);
    }
  }
}

export default BonusValidate;
