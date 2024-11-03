import ERROR_MESSAGE from "../static/Error.js";
import LOTTO_CONFIG from "../static/LottoConfig.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateRange(numbers);
    this.#validateDuplicates(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONFIG.numbers.LENGTH) {
      throw new Error(ERROR_MESSAGE.lotto.INVALID_LENGTH);
    }
  }

  #validateRange(numbers) {
    const isInvalid = numbers.some(
      number => !Number.isInteger(number) || number < LOTTO_CONFIG.numbers.MIN || number > LOTTO_CONFIG.numbers.MAX
    );
    if (isInvalid) {
      throw new Error(ERROR_MESSAGE.lotto.INVALID_RANGE);
    }
  }

  #validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.lotto.DUPLICATE_NUMBER);
    }
  }

  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  match(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;