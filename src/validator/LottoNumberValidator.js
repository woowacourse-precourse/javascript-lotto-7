import { GAME_CONSTANTS } from "../utils/GameConstants.js";
import { ERROR_MESSAGES } from "../utils/ErrorMessageConstants.js";

export class LottoNumberValidator {
  static validate(numbers) {
    this.validateLength(numbers);
    this.validateRange(numbers);
    this.validateDuplicated(numbers);
  }

  // 로또 번호 6개인지 검증
  static validateLength(numbers) {
    if (numbers.length !== GAME_CONSTANTS.NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
    }
  }

  // 로또 번호 범위 1~45인지 검증
  static validateRange(numbers) {
    numbers.forEach((number) => {
      if (
        number < GAME_CONSTANTS.MIN_NUMBER ||
        number > GAME_CONSTANTS.MAX_NUMBER
      ) {
        throw new Error(ERROR_MESSAGES.INVALID_RANGE);
      }
    });
  }

  // 로또 번호 중복 검증
  static validateDuplicated(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_NUMBER);
    }
  }
}
