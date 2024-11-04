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
      generateError("배열이 아닙니다.");
    }
  }

  static #isNotSixNumber(winningNumbers) {
    if (winningNumbers.length !== 6) {
      generateError("당첨 번호가 6개가 아닙니다. 당첨 번호는 ,로 구분된 6개의 숫자여야 합니다.");
    }
  }

  static #isContainNotNumber(winningNumbers) {
    if (Validator.containNotNumber(winningNumbers)) {
      generateError("당첨 번호에 숫자가 아닌 요소가 포함되어 있습니다.");
    }
  }

  static #isContainUniqueNumber(winningNumbers) {
    if (Validator.hasUniqueNumber(winningNumbers)) {
      generateError("당첨 번호에 중복된 수가 포함되어 있습니다.");
    }
  }

  static #isContainOverRange(winningNumbers) {
    if (winningNumbers.some((number) => number < 1 || number > 45)) {
      generateError("당첨 번호는 1 ~ 45 사이의 수만 입력 가능합니다.");
    }
  }
}

export default WinningNumbersValidator;
