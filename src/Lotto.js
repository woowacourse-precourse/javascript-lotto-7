import ValidateNumber from './controller/ValidateNumber.js';
import { NUMBER_ERROR_MESSAGES } from './contents/InputErrorMessages.js';

const LOTTO_NUMBER_COUNT = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    ValidateNumber.checkArrayLength(
      numbers,
      LOTTO_NUMBER_COUNT,
      NUMBER_ERROR_MESSAGES.winningNumberGuid,
    );
    ValidateNumber.checkForDuplicates(
      numbers,
      NUMBER_ERROR_MESSAGES.dupicateNumber,
    );
    numbers.forEach((num) => {
      ValidateNumber.validateNumber(
        num,
        NUMBER_ERROR_MESSAGES.winningNumberGuid,
      );
    });
    return numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
