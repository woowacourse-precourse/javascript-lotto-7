import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class WinningNumbersValidator {
  constructor() {
    this.winningNumber = 0;
    // this.parsedWinningNumbers = this.winningNumber.split(',').map((x) => x.trim());
  }

  isWinningNumbersEmptyInput(winningNumbers) {
    return winningNumbers !== '';
  }

  isWinningNumbersSixDigits(winningNumber) {
    return winningNumber.split(',').map((x) => x.trim()).length === 6;
  }

  isWinningNumbersRange(winningNumber) {
    const arr = winningNumber.split(',').map((x) => x.trim());
    const result = arr.every((range) => range > 0 && range < 46);
    return result;
  }

  isWinningNumbersFiveComma(winningNumber) {
    const arr = [...winningNumber];
    const onlyNumber = arr.filter((number) => number === ',');
    return onlyNumber.length === 5;
  }

  isWinningNumberDuplicated(winningNumber) {
    const onlyNumber = winningNumber
      .split(',')
      .map((x) => x.trim())
      .filter((number) => !isNaN(number) === true);
    const uniqueWinningNumbers = new Set(onlyNumber);
    return onlyNumber.length === uniqueWinningNumbers.size;
  }

  validateWinningNumbers(winningNumbers) {
    if (!this.isWinningNumbersEmptyInput(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_WINNING_NUMBERS);
    }

    if (!this.isWinningNumbersSixDigits(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.NUMBERS_LENGTH);
    }

    if (!this.isWinningNumbersRange(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.NUMBERS_RANGE);
    }

    if (!this.isWinningNumbersFiveComma(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.COMMA_COUNT);
    }

    if (!this.isWinningNumberDuplicated(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.UNIQUE_NUMBER);
    }
    
    return true;
  }
}

export { WinningNumbersValidator };
