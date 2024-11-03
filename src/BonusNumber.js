import {
  ERROR_MESSAGES,
  NUMBER,
  checkEmpty,
  checkInRange,
  checkValidNumber,
  handleError,
} from './shared/index.js';

class BonusNumber {
  #number;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#number = number;
  }

  #validate(number, winningNumbers) {
    const stringToNumber = Number(number);
    checkEmpty(stringToNumber, ERROR_MESSAGES.INVALID_EMPTY);
    checkInRange(NUMBER.MIN, NUMBER.MAX, stringToNumber);
    checkValidNumber(stringToNumber);
    this.#checkDuplicateWithWinningNumbers(stringToNumber, winningNumbers);
  }

  #checkDuplicateWithWinningNumbers(number, winningNumbers) {
    const isDuplicateWithWinningNumbers = winningNumbers.includes(number);

    handleError(
      isDuplicateWithWinningNumbers,
      ERROR_MESSAGES.DUPLICATED_NUMBER
    );
  }

  get number() {
    return Number(this.#number);
  }
}

export default BonusNumber;
