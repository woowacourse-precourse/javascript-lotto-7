import ERRORS from '../constants/Errors.js';

class Validator {
  // 구매 금액 검증
  static validatePurchaseAmount(amount) {
    this.ensureNotEmpty(amount, ERRORS.PURCHASE_AMOUNT_EMPTY);
    this.ensureIsNumber(amount, ERRORS.PURCHASE_AMOUNT_NOT_NUMBER);
    this.ensurePositive(amount, ERRORS.PURCHASE_AMOUNT_NEGATIVE);
    this.ensureValidUnit(amount, ERRORS.PURCHASE_AMOUNT_INVALID_UNIT);
  }

  // 당첨 번호 검증
  static validateWinningNumbers(numbers) {
    this.ensureNotEmpty(numbers, ERRORS.WINNING_NUMBERS_EMPTY);
    this.ensureValidLength(numbers, 6, ERRORS.WINNING_NUMBERS_INVALID_COUNT);
    const parsedNumbers = this.parseNumbers(numbers);
    this.ensureAllNumbers(parsedNumbers, ERRORS.WINNING_NUMBERS_NOT_NUMBER);
    this.ensureUnique(parsedNumbers, ERRORS.WINNING_NUMBERS_DUPLICATE);
    this.ensureWithinRange(
      parsedNumbers,
      1,
      45,
      ERRORS.WINNING_NUMBERS_NOT_NUMBER,
    );
  }

  // 보너스 번호 검증
  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.ensureNotEmpty(bonusNumber, ERRORS.BONUS_NUMBER_EMPTY);
    const parsedBonusNumber = this.parseNumber(bonusNumber);
    this.ensureValidBonusNumber(
      parsedBonusNumber,
      ERRORS.BONUS_NUMBER_OUT_OF_RANGE,
    );
    this.ensureNotDuplicate(
      parsedBonusNumber,
      winningNumbers,
      ERRORS.BONUS_NUMBER_DUPLICATE,
    );
  }

  // 유틸리티 메서드들
  static ensureNotEmpty(value, error) {
    if (value === '' || (Array.isArray(value) && value.length === 0)) {
      throw new Error(error);
    }
  }

  static ensureIsNumber(value, error) {
    if (isNaN(value)) {
      throw new Error(error);
    }
  }

  static ensurePositive(value, error) {
    const number = Number(value);
    if (number <= 0) {
      throw new Error(error);
    }
  }

  static ensureValidUnit(value, error) {
    const number = Number(value);
    if (number % 1000 !== 0) {
      throw new Error(error);
    }
  }

  static ensureValidLength(array, expectedLength, error) {
    if (array.length !== expectedLength) {
      throw new Error(error);
    }
  }

  static parseNumbers(numbers) {
    return numbers.map((number) => Number(number));
  }

  static parseNumber(value) {
    return Number(value);
  }

  static ensureAllNumbers(array, error) {
    array.forEach((num) => {
      if (isNaN(num)) {
        throw new Error(error);
      }
    });
  }

  static ensureUnique(array, error) {
    const uniqueSet = new Set(array);
    if (uniqueSet.size !== array.length) {
      throw new Error(error);
    }
  }

  static ensureWithinRange(array, min, max, error) {
    array.forEach((num) => {
      if (num < min || num > max) {
        throw new Error(error);
      }
    });
  }

  static ensureValidBonusNumber(number, error) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error(error);
    }
  }

  static ensureNotDuplicate(bonusNumber, winningNumbers, error) {
    const parsedWinningNumbers = winningNumbers.map((num) => Number(num));
    if (parsedWinningNumbers.includes(bonusNumber)) {
      throw new Error(error);
    }
  }
}

export default Validator;
