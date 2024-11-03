import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class BonusNumberValidator {
  // 보너스 번호의 유효성을 검사하는 메서드
  static checkValid(bonusNumber, winningNumbers) {
    this.#isNotNumber(bonusNumber);
    this.#isOverRange(bonusNumber);
    this.#isDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  // 숫자가 아닌 경우
  static #isNotNumber(bonusNumber) {
    if (Validator.isNotNumber(bonusNumber)) {
      generateError("숫자로 입력하지 않았습니다. 보너스 번호는 숫자로 입력해야 합니다.");
    }
  }

  // 숫자의 범위에서 벗어나는 경우
  static #isOverRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      generateError("보너스 번호는 1 ~ 45 사이의 수만 입력 가능합니다.");
    }
  }

  // 숫자의 범위에서 벗어나는 경우
  static #isDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const combineArr = [bonusNumber, ...winningNumbers];
    if (Validator.hasUniqueNumber(combineArr)) {
      generateError("보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default BonusNumberValidator;
