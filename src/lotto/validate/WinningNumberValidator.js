import CommonValidator from './CommonValidator.js';
import { ERROR_MESSAGE } from '../constants/Message.js';


class WinningNumberValidator extends CommonValidator {

  #numberCount;

  #numberRange;

  constructor(numberCount, numberRange) {
    super();

    this.#numberCount = numberCount;
    this.#numberRange = numberRange;
  }

  validateRawWinningNumber(rawValue) {
    super.checkValidInput(rawValue);
  }

  validateWinningNumbers(numbers) {
    super.checkValidInputValues(numbers);
    super.validateEqualNumberCount(numbers.length, this.#numberCount);
    numbers.forEach(number => {
      super.validateNumericInput(number);
      this.#checkNumberInNumberRange(number);
    });
    super.validateDuplicateNumbers(numbers);
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    super.checkValidInput(bonusNumber);
    super.validateNumericInput(bonusNumber);
    this.#checkNumberInNumberRange(bonusNumber);

    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGE.ERROR_DUPLICATE_NUMBER);
    }
  }

  #checkNumberInNumberRange(number) {
    const { startNumber, endNumber } = this.#numberRange;
    super.validateNumberInRange(number, startNumber, endNumber);
  }
}

export default WinningNumberValidator;