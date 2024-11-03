import { ERROR_MESSAGES } from '../../Constants/errorMessages.js';

class WinningNumbersValidator {
  constructor() {
    this.winningNumber = 0;
    // this.parsedWinningNumbers = this.winningNumber.split(',').map((x) => x.trim());
  }

  isValidEmptyInput(winningNumbers) {
    return winningNumbers !== '';
  }

  isValidSixDigits(winningNumber) {
    return winningNumber.split(',').map((x) => x.trim()).length === 6;
  }

  isValidNumbersRange(winningNumber) {
    const arr = winningNumber.split(',').map((x) => x.trim());
    const result = arr.every((range) => range > 0 && range < 46);

    return result;
  }

  isValidFiveComma(winningNumber) {
    const arr = [...winningNumber];
    const onlyNumber = arr.filter((number) => number === ',');

    return onlyNumber.length === 5;
  }

  isValidNumberDuplicated(winningNumber) {
    const onlyNumber = winningNumber
      .split(',')
      .map((x) => x.trim())
      .filter((number) => !isNaN(number) === true);
    const uniqueWinningNumbers = new Set(onlyNumber);

    return onlyNumber.length === uniqueWinningNumbers.size;
  }

  validateWinningNumbers(winningNumber) {
    if (!this.isValidEmptyInput(winningNumber)) {
      throw new Error(ERROR_MESSAGES.winningNumbers.EMPTY_INPUT);
    }

    if (!this.isValidSixDigits(winningNumber)) {
      throw new Error(ERROR_MESSAGES.winningNumbers.NUMBER_LENGTH);
    }

    if (!this.isValidNumbersRange(winningNumber)) {
      throw new Error(ERROR_MESSAGES.winningNumbers.NUMBER_RANGE);
    }

    if (!this.isValidFiveComma(winningNumber)) {
      throw new Error(ERROR_MESSAGES.winningNumbers.COMMA_COUNT);
    }

    if (!this.isValidNumberDuplicated(winningNumber)) {
      throw new Error(ERROR_MESSAGES.winningNumbers.UNIQUE_NUMBER);
    }

    return true;
  }
}

export { WinningNumbersValidator };
