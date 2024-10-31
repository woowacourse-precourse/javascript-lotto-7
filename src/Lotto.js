import ERROR_MESSAGES from './constants/errorConstants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER_COUNT);
    }
    const lottoSet = new Set();
    numbers.forEach((number) => {
      this.#checkDuplicate(number, lottoSet);
    });
  }

  #checkDuplicate(number, lottoSet) {
    if (lottoSet.has(number)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_IN_LOTTO);
    }
    lottoSet.add(number);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
