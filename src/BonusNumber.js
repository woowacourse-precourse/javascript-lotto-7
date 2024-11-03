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
    checkEmpty(number, ERROR_MESSAGES.INVALID_EMPTY);
    checkInRange(NUMBER.START, NUMBER.MAX, number);
    checkValidNumber(number);
    this.#checkDuplicateWithWinningNumbers(number, winningNumbers);
  }

  #checkDuplicateWithWinningNumbers(number, winningNumbers) {
    const isDuplicateWithWinningNumbers = winningNumbers.includes(
      Number(number)
    );

    handleError(
      isDuplicateWithWinningNumbers,
      ERROR_MESSAGES.DUPLICATED_NUMBER
    );
  }

  get number() {
    return this.#number;
  }
}

export default BonusNumber;
