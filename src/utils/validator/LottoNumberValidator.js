import { GAME_CONSTANTS } from "../constants/GameConstants.js";
import { ERROR_MESSAGES } from "../constants/ErrorMessageConstants.js";

export class LottoNumberValidator {
  // 로또 번호 검증
  static validateLottoNumbers(numbers) {
    this.validateNumberArray(numbers);
    this.validateLength(numbers);
    this.validateRange(numbers);
    this.validateDuplicated(numbers);
  }

  // 로또 번호의 배열이 숫자인지 검증
  static validateNumberArray(numbers) {
    if (
      !Array.isArray(numbers) ||
      numbers.some((number) => typeof number !== "number" || isNaN(number))
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }
  }

  // 로또 개수가 6개인지 검증
  static validateLength(numbers) {
    if (numbers.length !== GAME_CONSTANTS.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
    }
  }

  // 로또 번호 범위가 1~45인지 검증
  static validateRange(numbers) {
    if (
      numbers.some(
        (number) =>
          number < GAME_CONSTANTS.MIN_NUMBER ||
          number > GAME_CONSTANTS.MAX_NUMBER
      )
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_RANGE);
    }
  }

  // 로또 번호 중복 검증
  static validateDuplicated(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_NUMBER);
    }
  }
}
