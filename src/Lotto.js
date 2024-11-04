import { ERROR_MESSAGE } from "./constants/messages.js";
import { isLottoLengthValid, hasDuplicate, validateLottoNumber } from "./utils/validation.js";

class Lotto {
  #numbers;

  constructor(input) {
    const numbers = input.split(",").map(Number);
    this.#validate(numbers);
    numbers.forEach((number) => validateLottoNumber(number));
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isLottoLengthValid(numbers)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }
    if (hasDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  hasSameNumber(number) {
    return this.#numbers.includes(number);
  }

  getMatchCountFrom(ticket) {
    return ticket.filter((number) => this.#numbers.includes(number)).length;
  }
}

export default Lotto;
