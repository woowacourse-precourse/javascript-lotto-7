import { ERROR_MESSAGES } from '../constant/constant.js';
import {
  throwValidationError,
  checkIsEmpty,
  checkNumberInRange,
  checkIsNumber,
} from '../utils/validation.js';

class BonusNumber {
  #number;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#number = Number(number);
  }

  getBonusNumber() {
    return this.#number;
  }

  #validate(number, winningNumbers) {
    checkIsEmpty(number);

    const parsedNumber = Number(number);
    checkIsNumber(parsedNumber);
    checkNumberInRange(parsedNumber);
    this.#checkBonusNumberDuplicate(parsedNumber, winningNumbers);
  }

  #checkBonusNumberDuplicate(bonusNumber, winningNumbers) {
    const numbers = winningNumbers.getWinningNumbers();

    if (numbers.includes(bonusNumber)) {
      throwValidationError(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }
}

export default BonusNumber;
