import CommonValidator from './CommonValidator.js';

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

    super.validateEqualNumberCount(numbers.length, this.#numberCount);
    const { startNumber, endNumber } = this.#numberRange;
    numbers.forEach((number) => super.validateNumberInRange(number, startNumber, endNumber));
    super.validateDuplicateNumbers(numbers);
  }
}

export default LottoNumberValidator;