import { CONFIG, ERROR_MESSAGE } from "./constants.js";
import { LottoError } from "./errors.js";

class LottoValidator {
  static validateNumberType(input) {
    const number = Number(input);
    if (Number.isNaN(number)) {
      throw new LottoError(ERROR_MESSAGE.INVALID_NUMBER_INPUT_TYPE);
    }
    return number;
  }

  static validateEmptyInput(input) {
    if (input === undefined || input.toString().trim().length === 0) {
      throw new LottoError(ERROR_MESSAGE.INVALID_EMPTY);
    }
    return input;
  }

  static validateUniqueNumbers(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new LottoError(ERROR_MESSAGE.INVALID_WINNER_NUMBER);
    }
    return numbers;
  }

  static validateLottoNumberLength(numbers) {
    if (numbers.length !== CONFIG.LOTTO_COUNT) {
      throw new LottoError(ERROR_MESSAGE.INVALID_WINNER_NUMBER_COUNT);
    }
    return numbers;
  }

  static validateLottoNumber(number) {
    if (number < CONFIG.MIN_LOTTO_NUMBER || number > CONFIG.MAX_LOTTO_NUMBER) {
      throw new LottoError(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
    }
    return number;
  }

  static validateArrayHasNoEmpty(values) {
    values.forEach(LottoValidator.validateEmptyInput);
    return values;
  }

  static validateArrayHasNumberType(values) {
    values.forEach(LottoValidator.validateNumberType);
    return values;
  }

  static validateBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new LottoError(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION);
    }
    return bonusNumber;
  }
}

export default LottoValidator;
