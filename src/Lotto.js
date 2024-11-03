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
    return numberArray.every((number) => !Number.isNaN(Number(number.trim())));
  }

  #validDuplication(numberArray) {
    const uniqueNumbers = new Set(numberArray);
    return uniqueNumbers.size === numberArray.length;
  }

  #validateWinningNumber(winningNumber) {
    const numberArray = winningNumber.split(',');

    if (
      !this.#validRange(numberArray) ||
      !this.#validFormat(numberArray) ||
      !this.#validDuplication(numberArray)
    ) {
      throw Error(ERROR.message);
    }
  }
}

export default Lotto;
