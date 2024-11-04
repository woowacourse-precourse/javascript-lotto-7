import { ERROR } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateWinningNumber(numbers);
  }

  #validRange(numberArray) {
    return (
      numberArray.length === 6 &&
      numberArray.every((number) => number >= 1 && number <= 45)
    );
  }

  #validFormat(numberArray) {
    return numberArray.every((number) => !Number.isNaN(number));
  }

  #validDuplication(numberArray) {
    const uniqueNumbers = new Set(numberArray);
    return uniqueNumbers.size === numberArray.length;
  }

  #validateWinningNumber(numbers) {
    const parsedNumbers = numbers.map((number) => Number(number));
    if (
      !this.#validRange(parsedNumbers) ||
      !this.#validFormat(parsedNumbers) ||
      !this.#validDuplication(parsedNumbers)
    ) {
      throw Error(ERROR.message);
    }
  }
}

export default Lotto;
