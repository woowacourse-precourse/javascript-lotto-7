import { INPUT_INVALID } from "../constants/Message.js";
import { LOTTO } from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class WinningNumbersValidator {
  static checkValid(winningNumbers) {
    this.#isNotArray(winningNumbers);
    this.#isNotSixNumber(winningNumbers);
    this.#isContainNotNumber(winningNumbers);
    this.#isContainUniqueNumber(winningNumbers);
    this.#isContainOverRange(winningNumbers);
  }

  static #isNotArray(winningNumbers) {
    if (!Array.isArray(winningNumbers)) {
      generateError(INPUT_INVALID.WINNING_NUMBER.NOT_ARRAY);
    }
  }

  static #isNotSixNumber(winningNumbers) {
    if (winningNumbers.length !== LOTTO.COUNT) {
      generateError(INPUT_INVALID.WINNING_NUMBER.UNDER_COUNT);
    }
  }

  static #isContainNotNumber(winningNumbers) {
    if (Validator.containNotNumber(winningNumbers)) {
      generateError(INPUT_INVALID.WINNING_NUMBER.HAS_NAN);
    }
  }

  static #isContainUniqueNumber(winningNumbers) {
    if (Validator.hasUniqueNumber(winningNumbers)) {
      generateError(INPUT_INVALID.WINNING_NUMBER.HAS_DUPLICATE);
    }
  }

  static #isContainOverRange(winningNumbers) {
    if (winningNumbers.some((number) => number < LOTTO.RANGE.MIN || number > LOTTO.RANGE.MAX)) {
      generateError(INPUT_INVALID.WINNING_NUMBER.OVER_RANGE);
    }
  }
}

export default WinningNumbersValidator;
