import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class WinningNumbersValidator {
  // 당첨번호의 유효성을 검사하는 메서드
  static checkValid(winningNumbers) {
    this.#isNotArray(winningNumbers);
    this.#isNotSixNumber(winningNumbers);
    this.#isContainNotNumber(winningNumbers);
    this.#isContainUniqueNumber(winningNumbers);
    this.#isContainOverRange(winningNumbers);
  }

  // 배열이 아닌 경우
  static #isNotArray(winningNumbers) {
    if (!Array.isArray(winningNumbers)) {
      generateError("배열이 아닙니다.");
    }
  }

  // 6개의 요소가 아닌 경우
  static #isNotSixNumber(winningNumbers) {
    if (winningNumbers.length !== 6) {
      generateError("당첨 번호가 6개가 아닙니다. 당첨 번호는 ,로 구분된 6개의 숫자여야 합니다.");
    }
  }

  // 당첨 번호에 숫자가 아닌 요소가 포함되어 있을 경우
  static #isContainNotNumber(winningNumbers) {
    if (Validator.containNotNumber(winningNumbers)) {
      generateError("당첨 번호에 숫자가 아닌 요소가 포함되어 있습니다.");
    }
  }

  // 당첨 번호에 중복된 수가 포함되어 있는 경우
  static #isContainUniqueNumber(winningNumbers) {
    if (Validator.hasUniqueNumber(winningNumbers)) {
      generateError("당첨 번호에 중복된 수가 포함되어 있습니다.");
    }
  }

  // 숫자의 범위에서 벗어나는 경우
  static #isContainOverRange(winningNumbers) {
    if (winningNumbers.some((number) => number < 1 || number > 45)) {
      generateError("당첨 번호는 1 ~ 45 사이의 수만 입력 가능합니다.");
    }
  }
}

export default WinningNumbersValidator;
