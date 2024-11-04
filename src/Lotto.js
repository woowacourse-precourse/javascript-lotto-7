import InputValidatorUtils from './controller/InputValidatorUtils.js';
import { NUMBER_ERROR_MESSAGES } from './contents/InputErrorMessages.js';
import { LOTTO } from './contents/LottoConstants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidatorUtils.checkArrayLength(
      numbers,
      LOTTO.NUMBER_COUNT,
      NUMBER_ERROR_MESSAGES.winningNumberGuid,
    );
    InputValidatorUtils.checkForDuplicates(
      numbers,
      NUMBER_ERROR_MESSAGES.dupicateNumber,
    );
    numbers.forEach((num) => {
      InputValidatorUtils.validateNumber(
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
