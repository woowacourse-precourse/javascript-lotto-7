import ERROR_MESSAGE from './constants/errorMessage.js';
import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateNumbersDuplicate(numbers);

    numbers.forEach((number) => {
      Validator.validateLottoNumber(number);
    });
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_SIX_LENGTH);
    }
  }

  #validateNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  #sortNumbers(numbers) {
    return [...numbers].sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber,
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
