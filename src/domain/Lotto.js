import ERROR_MESSAGE from '../constants/errorMessage.js';
import CustomError from '../CustomError.js';
import LottoNumberValidator from '../LottoNumberValidator.js';

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
      LottoNumberValidator.validateLottoNumber(number);
    });
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(ERROR_MESSAGE.NOT_SIX_LENGTH);
    }
  }

  #validateNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  #sortNumbers(numbers) {
    const translatedNumbers = numbers.map(Number);
    return translatedNumbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
