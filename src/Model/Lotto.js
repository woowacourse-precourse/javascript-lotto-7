class Lotto {
  static #ERROR_MESSAGE = Object.freeze({
    INVALID_NUMBER_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    DUPLICATED_NUMBER: '[ERROR] 중복된 숫자가 있습니다.',
    INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이여야 합니다.',
  });

  static PRICE = 1_000;

  #numbers;

  constructor(numbers) {
    const validNumbers = Lotto.validate(numbers);
    this.#numbers = validNumbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Lotto.#ERROR_MESSAGE.INVALID_NUMBER_LENGTH);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(Lotto.#ERROR_MESSAGE.DUPLICATED_NUMBER);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(Lotto.#ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }

    return numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  getSortedNumbers() {
    return this.#numbers.slice().sort((a, b) => a - b);
  }
}

export default Lotto;
