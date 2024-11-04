import { ERROR_MESSAGE } from './lottoConstants.js';

class Validate {
  isEmpty(input) {
    if (!input.trim()) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  isNumber(input) {
    const numberInput = Number(input);
    if (Number.isNaN(numberInput)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
  }

  isInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR_MESSAGE.INVALID_DECIMAL);
    }
  }

  isDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE);
    }
  }
}

export default Validate;
