import { CONSTANT, LOTTO_ERROR } from "./constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#validateBonus(numbers, bonus);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_CNT);
    }
    this.#validSameValue(numbers);
    for (let i = 0; i < numbers.length; i++) {
      this.#validNumber(numbers[i]);
    }
  }

  #validateBonus(numbers, bonus) {
    if (
      !(
        bonus >= CONSTANT.LOTTO_RANGE_LOWER &&
        bonus <= CONSTANT.LOTTO_RANGE_UPPER
      )
    ) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_RANGE);
    }
    if (numbers.includes(bonus)) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_DUPLICATION);
    }
    this.#validNumber(bonus);
  }

  #validNumber(number) {
    const validBonus = Number(number);
    if (isNaN(validBonus) || !Number.isInteger(validBonus)) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_INPUT);
    }
  }

  #validSameValue(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_DUPLICATION);
    }
    if (
      !numbers.every(
        (num) =>
          num >= CONSTANT.LOTTO_RANGE_LOWER && num <= CONSTANT.LOTTO_RANGE_UPPER
      )
    ) {
      throw new Error(LOTTO_ERROR.LOTTO_NUMBER_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
