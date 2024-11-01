import { ERROR_MESSAGES, NUMBER } from './constants.js';
import { checkEmpty, handleError, checkValidNumber } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#checkDelimiterPosition(numbers);
    this.#checkValidLength(numbers);
    this.#checkOnlyNumbers(numbers);
    this.#checkDuplicatedNumber(numbers);
    this.#checkRange1To45(numbers);
  }

  get numbers() {
    return this.#numbers;
  }

  #checkRange1To45(numbers) {
    numbers.forEach((number) => {
      const isNumberInRange = number >= NUMBER.START && number <= NUMBER.MAX;

      handleError(!isNumberInRange, ERROR_MESSAGES.INVALID_NUMBER_RANGE);
    });
  }

  #checkDuplicatedNumber(numbers) {
    const inputNumbers = new Set(numbers);
    const isDuplication = inputNumbers.size !== numbers.length;

    handleError(isDuplication, ERROR_MESSAGES.DUPLICATED_NUMBER);
  }

  #checkOnlyNumbers(numbers) {
    numbers.forEach((number) =>
      checkValidNumber(number, ERROR_MESSAGES.INVALID_TYPE)
    );
  }

  #checkDelimiterPosition(numbers) {
    numbers.forEach((number) =>
      checkEmpty(number, ERROR_MESSAGES.INVALID_DELIMITER_POSITION)
    );
  }

  #checkValidLength(numbers) {
    const isInValidLength = numbers.length !== NUMBER.VALID_LENGTH;

    handleError(isInValidLength, ERROR_MESSAGES.INVALID_NUMBER_LENGTH);
  }
}

export default Lotto;
