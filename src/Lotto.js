import { ERROR_MESSAGE, RULE } from './constants/index.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.includes('')) {
      throw new Error(ERROR_MESSAGE.NO_BLANK);
    }
    if (numbers.some(isNaN)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_ENOUGH_NUMBERS(RULE.LOTTO_BALL_NUMBER));
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
    }
    if (
      numbers.some((number) => {
        return number < RULE.LOTTO_MIN_NUMBER || number > RULE.LOTTO_MAX_NUMBER;
      })
    ) {
      throw new Error(
        ERROR_MESSAGE.OUT_OF_RANGE_NUMBER(
          RULE.LOTTO_MIN_NUMBER,
          RULE.LOTTO_MAX_NUMBER,
        ),
      );
    }
  }

  get numbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
