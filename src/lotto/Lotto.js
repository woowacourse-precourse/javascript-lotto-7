import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER, LOTTO_NUMBERS_COUNT } from "../constant/constants.js";
import { inValidMessages } from "../constant/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateDuplicate(numbers);
    this.#validateWithInRange(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(inValidMessages.lottoCount);
    }
  }

  #validateDuplicate(numbers) {
    const set = new Set(numbers);
    const hasDuplicate = set.size !== LOTTO_NUMBERS_COUNT
    if (hasDuplicate) {
      throw new Error(inValidMessages.duplicate);
    }
  }

  #validateWithInRange(numbers) {
    const isInRange = !(numbers.some((number) => number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER));
    if (!isInRange) {
      throw new Error(inValidMessages.range);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
