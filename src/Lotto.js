import { MAGIC_NUMBER } from "./constants/magicNumber.js";
import { MESSAGES } from "./constants/messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        MESSAGES.ERROR.PREFIX +
          MESSAGES.ERROR.LOTTO_PICK_NUM(MAGIC_NUMBER.LOTTO_PICK_NUM)
      );
    }

    numbers.forEach((number) => {
      if (!Number.isInteger(Number(number))) {
        throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.NOT_INT);
      }
      this.#validateIntsRange(
        number,
        MAGIC_NUMBER.LOTTO_MIN_NUM,
        MAGIC_NUMBER.LOTTO_MAX_NUM
      );
    });
  }

  #validateIntsRange(number, min, max) {
    if (Number(number) < min || Number(number) > max) {
      throw new Error(
        MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.RANGE_INT(min, max)
      );
    }
  }

  #validateDuplicate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.DUPLICATE_INT);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
