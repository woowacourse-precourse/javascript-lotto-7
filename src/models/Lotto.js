import { LOTTO_ERROR } from "../constants/Message.js";
import { LOTTO } from "../constants/Setting.js";
import { generateError } from "../utils/generateError.js";
import Validator from "../validators/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateUniqueNumber(numbers);
    this.#validateContainNotNumber(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      generateError(LOTTO_ERROR.INVALID_COUNT);
    }
  }

  #validateUniqueNumber(numbers) {
    if (Validator.hasUniqueNumber(numbers)) {
      generateError(LOTTO_ERROR.HAS_DUPLICATE);
    }
  }

  #validateContainNotNumber(numbers) {
    if (Validator.containNotNumber(numbers)) {
      generateError(LOTTO_ERROR.HAS_NAN);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
