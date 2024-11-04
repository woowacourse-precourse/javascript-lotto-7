import {
  ERROR_MESSAGES,
  LOTTO_NUMBER_COUNT,
  PURCHASE_AMOUNT_DIVISOR,
  RANDOM_NUMBER_END,
  RANDOM_NUMBER_START,
} from '../../constants.js';

class InputValidator {
  validatePurchaseAmount(amount) {
    this.validateEmpty(amount);

    const amountValue = Number(amount);
    this.validateNaN(amountValue);
    this.validateDivisibility(amountValue);
  }

  validateWinningNumbers(numbers) {
    this.validateWinningNumbersLength(numbers);

    numbers.forEach(number => {
      this.validateNaN(number);
      this.validateRange(number);
    });

    this.validateUniqueNumbers(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    this.validateEmpty(bonusNumber);
    this.validateSingleInput(bonusNumber);

    const bonusNumberValue = Number(bonusNumber);
    this.validateNaN(bonusNumberValue);
    this.validateRange(bonusNumberValue);
    this.validateBonusUnique(winningNumbers, bonusNumberValue);
  }

  validateEmpty(value) {
    if (value === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  validateNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  validateDivisibility(value) {
    if (value % PURCHASE_AMOUNT_DIVISOR !== 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY);
    }
  }

  validateWinningNumbersLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_LENGTH_ERROR);
    }
  }

  validateRange(value) {
    if (value < RANDOM_NUMBER_START || value > RANDOM_NUMBER_END) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
    }
  }

  validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS);
    }
  }

  validateSingleInput(value) {
    if (value.split(',').length !== 1) {
      throw new Error(ERROR_MESSAGES.BONUS_LENGTH_ERROR);
    }
  }

  validateBonusUnique(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_UNIQUE_ERROR);
    }
  }
}

export default InputValidator;
