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
    const { startNumber, endNumber } = this.#numberRange;
    numbers.forEach((number) => super.validateNumberInRange(number, startNumber, endNumber));
    this.#validateDuplicateNumbers(numbers);
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