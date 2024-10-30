import ERROR_MESSAGE from './constants/errorMessage.js';
import LOTTO_BOUNDARY from './constants/magicNumber.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.PROPER_LOTTO_NUMBERS);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMERS);
    }

    numbers.forEach((number) => {
      if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
        throw new Error(ERROR_MESSAGE.BETWEEN_1_TO_45_NUMBERS);
      }
    });
  }

  #sortNumbers(numbers) {
    return numbers.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber,
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
