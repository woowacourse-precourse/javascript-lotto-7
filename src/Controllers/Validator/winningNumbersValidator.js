import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class WinningNumbersValidator {
  constructor(winningNumber) {
    this.winningNumber = winningNumber;
    this.parsedWinningNumbers = this.winningNumber.split(',').map((x) => x.trim());
  }

  isWinningNumbersEmptyInput() {
    return this.parsedWinningNumbers.length === 6;
  }

  isWinningNumbersSixDigits() {
    return this.parsedWinningNumbers.length === 6;
  }

  isWinningNumbersFiveComma() {
    const arr = [...this.winningNumber];
    const onlyNumber = arr.filter((number) => number === ',');
    return onlyNumber.length === 5;
  }

  isWinningNumberDuplicated() {
    const onlyNumber = this.parsedWinningNumbers.filter((number) => !isNaN(number) === true);
    const uniqueWinningNumbers = new Set(onlyNumber);
    return onlyNumber.length === uniqueWinningNumbers.size;
  }

  validateWinningNumbers() {
    if (!this.isWinningNumbersEmptyInput(this.winningNumber)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT_WINNING_NUMBERS);
    }
    if (!this.isWinningNumbersSixDigits(this.winningNumber)) {
      throw new Error(ERROR_MESSAGE.NUMBERS_LENGTH);
    }
    if (!this.isWinningNumbersFiveComma(this.winningNumber)) {
      throw new Error(ERROR_MESSAGE.COMMA_COUNT);
    }
    if (!this.isWinningNumberDuplicated(this.winningNumber)) {
      throw new Error(ERROR_MESSAGE.UNIQUE_NUMBER);
    }
  }
}

export { WinningNumbersValidator };