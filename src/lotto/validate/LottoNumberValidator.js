import {
  isNumberInRange,
  isDuplicateValueInArray
} from '../../util/Validator.js';
import CommonValidator from './CommonValidator.js';
import { ERROR_MESSAGE } from '../constants/Message.js';

class LottoNumberValidator extends CommonValidator {

  #numberCount;

  #numberRange;

  constructor(numberCount, numberRange) {
    super();

    this.#numberCount = numberCount;
    this.#numberRange = numberRange;
  }

  validateLottoNumbers = (numbers) => {
    super.checkValidInputValues(numbers);

    this.#validateLottoNumberCount(numbers.length);
    numbers.forEach((number) => this.#validateLottoNumberInRange(number));
    this.#validateDuplicateNumbers(numbers);
  }

  #validateLottoNumberInRange = (number) => {
    const { startNumber, endNumber } = this.#numberRange;

    if (!isNumberInRange(number, startNumber, endNumber)) {
      throw new Error(ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(number, startNumber, endNumber));
    }
  }

  #validateLottoNumberCount = (inputcount) => {
    if (inputcount !== this.#numberCount) {
      throw new Error(ERROR_MESSAGE.ERROR_INCORRECT_LOTTO_NUMBER_COUNT(inputcount, this.#numberCount));
    }
  }

  #validateDuplicateNumbers = (numbers) => {
    if (isDuplicateValueInArray(numbers)) {
      throw new Error(ERROR_MESSAGE.ERROR_DUPLICATE_NUMBER);
    }
  }
}

export default LottoNumberValidator;