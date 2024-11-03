import {
  isLottoLengthValid,
  hasDuplicate,
  isNumber,
  isInteger,
  isInRange,
} from "./utils/validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.forEach((number) => this.#validateEachNumber(number));
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isLottoLengthValid(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (hasDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  #validateEachNumber(number) {
    if (!isNumber(number)) {
      throw new Error("[ERROR] 로또 번호는 숫자만 입력 가능합니다.");
    }
    if (!isInteger(number)) {
      throw new Error("[ERROR] 로또 번호는 정수만 입력 가능합니다.");
    }
    if (!isInRange(number)) {
      throw new Error("[ERROR] 로또 번호 범위는 1~45입니다.");
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
