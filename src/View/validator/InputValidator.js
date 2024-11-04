import {
  ERROR_MESSAGES,
  LOTTO_NUMBER_COUNT,
  PURCHASE_AMOUNT_DIVISOR,
  RANDOM_NUMBER_END,
  RANDOM_NUMBER_START,
} from '../../constants.js';

class InputValidator {
  validatePurchaseAmount(amount) {
    this.checkEmpty(amount);

    const amountValue = Number(amount);
    this.checkNaN(amountValue);
    this.checkDivisibility(amountValue);
  }

  validateWinningNumbers(numbers) {
    this.checkWinningNumbersLength(numbers);

    numbers.forEach(number => {
      this.checkNaN(number);
      this.checkRange(number);
    });

    this.checkUniqueNumbers(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    this.checkEmpty(bonusNumber);
    this.checkSingleInput(bonusNumber);

    const bonusNumberValue = Number(bonusNumber);
    this.checkNaN(bonusNumberValue);
    this.checkRange(bonusNumberValue);
    this.checkBonusUnique(winningNumbers, bonusNumberValue);
  }

  checkEmpty(value) {
    if (value === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  checkNaN(value) {
    if (Number.isNaN(value)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  }

  checkDivisibility(value) {
    if (value % PURCHASE_AMOUNT_DIVISOR !== 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY);
    }
  }

  checkWinningNumbersLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBERS_LENGTH_ERROR);
    }
  }

  checkRange(value) {
    if (value < RANDOM_NUMBER_START || value > RANDOM_NUMBER_END) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_OUT_OF_RANGE);
    }
  }

  checkUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_WINNING_NUMBERS);
    }
  }

  checkSingleInput(value) {
    if (value.split(',').length !== 1) {
      throw new Error(ERROR_MESSAGES.BONUS_LENGTH_ERROR);
    }
  }

  checkBonusUnique(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_UNIQUE_ERROR);
    }
  }
}

export default InputValidator;
