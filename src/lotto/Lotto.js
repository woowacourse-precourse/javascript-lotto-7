import { LOTTO_NUMBERS_COUNT } from "../constant/constants.js";
import { inValidMessages } from "../constant/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#hasDuplicate(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(inValidMessages.winningLottoCount);
    }
  }

  #hasDuplicate(numbers) {
    const set = new Set(numbers);
    const hasDuplicate = set.size !== LOTTO_NUMBERS_COUNT
    if (hasDuplicate) {
      throw new Error(inValidMessages.duplicate);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
