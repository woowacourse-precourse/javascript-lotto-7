import ERROR from "../constants/error.js";
import CONSTANT from "../constants/costant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers == '') {
      throw new Error(ERROR.BLANK);
    }

    if (numbers.length !== CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH) {
      throw new Error(ERROR.INVALID_NUMBER_COUNT);
    }

    const removeDuplicate = new Set(numbers);
    if (numbers.length !== removeDuplicate.size) {
      throw new Error(ERROR.DUPLICATED_NUMBER);
    }
  }
}

export default Lotto;
