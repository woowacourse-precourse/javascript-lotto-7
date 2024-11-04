import { ERROR_MESSAGE, LOTTO_ERROR } from "../constants/error.js";
import { DELIMITER } from "../constants/message.js";
import { DELIMITER_REGEX } from "../utils/regex.js";
import LottoValidate from "../validation/LottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(this.#numbers);
  }

  #validate(numbers) {
    const validate = new LottoValidate();
    validate.validateLotto(numbers);
  }

  countMatchingNumbers(numbers) {
    return this.#numbers.filter((number) => numbers.includes(number)).length;
  }

  get value() {
    return this.#numbers;
  }
}

export default Lotto;
