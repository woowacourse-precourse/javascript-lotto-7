import { INPUT_INVALID } from "../constants/Message.js";
import { LOTTO } from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class BonusNumberValidator {
  static checkValid(bonusNumber, winningNumbers) {
    this.#isNotNumber(bonusNumber);
    this.#isOverRange(bonusNumber);
    this.#isDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  static #isNotNumber(bonusNumber) {
    if (Validator.isNotNumber(bonusNumber)) {
      generateError(INPUT_INVALID.BONUS_NUMBER.NOT_NUMBER);
    }
  }

  static #isOverRange(bonusNumber) {
    if (bonusNumber < LOTTO.RANGE.MIN || bonusNumber > LOTTO.RANGE.MAX) {
      generateError(INPUT_INVALID.BONUS_NUMBER.OVER_RANGE);
    }
  }

  static #isDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const combineArr = [bonusNumber, ...winningNumbers];
    if (Validator.hasUniqueNumber(combineArr)) {
      generateError(INPUT_INVALID.BONUS_NUMBER.HAS_DUPLICATE);
    }
  }
}

export default BonusNumberValidator;
