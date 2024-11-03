import { ERROR_MESSAGES } from '../../Constants/errorMessages.js';

class WinningNumbersValidator {
  constructor() {
    this.winningNumbers = 0;
  }

  isValidEmptyInput() {
    return this.winningNumbers !== '';
  }

  isValidSixDigits() {
    return this.winningNumbers.split(',').map((x) => x.trim()).length === 6;
  }

  isValidNumbersRange() {
    const arr = this.winningNumbers.split(',').map((x) => x.trim());
    const result = arr.every((range) => range > 0 && range < 46);

    return result;
  }

  isValidFiveComma() {
    const arr = [...this.winningNumbers];
    const onlyNumber = arr.filter((number) => number === ',');

    return onlyNumber.length === 5;
  }

  isValidNumberDuplicated() {
    const onlyNumber = this.winningNumbers
      .split(',')
      .map((x) => x.trim())
      .filter((number) => !isNaN(number) === true);
    const uniqueWinningNumbers = new Set(onlyNumber);

    return onlyNumber.length === uniqueWinningNumbers.size;
  }

  getValidationRules() {
    return [
      [!this.isValidEmptyInput(), ERROR_MESSAGES.winningNumbers.EMPTY_INPUT],
      [!this.isValidSixDigits(), ERROR_MESSAGES.winningNumbers.NUMBER_LENGTH],
      [!this.isValidNumbersRange(), ERROR_MESSAGES.winningNumbers.NUMBER_RANGE],
      [!this.isValidFiveComma(), ERROR_MESSAGES.winningNumbers.COMMA_COUNT],
      [!this.isValidNumberDuplicated(), ERROR_MESSAGES.winningNumbers.UNIQUE_NUMBER],
    ];
  }

  validateWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers;
    const validationRules = this.getValidationRules();

    validationRules.forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }
}

export { WinningNumbersValidator };
