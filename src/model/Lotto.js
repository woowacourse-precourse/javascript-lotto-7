import { UTILS } from "../common/constants.js";

class Lotto {
  #numbers;

  constructor(input) {
    const numbers = this.#parseAndValidate(input);
    this.#numbers = numbers;
  }

  #parseAndValidate(input) {
    if (!input) {
      throw new Error("[ERROR] 당첨번호를 입력해야 합니다.");
    }

    const inputStr = String(input);
    if (!UTILS.number_comma.test(inputStr)) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.");
    }

    const numbers = inputStr.split(UTILS.comma).map(Number);
    if (numbers.some(num => !UTILS.positive_integer.test(num.toString()))) {
      throw new Error("[ERROR] 당첨 번호는 양의 정수로 입력해야 합니다.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개의 숫자로 입력해야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복된 숫자가 없도록 입력해야 합니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 1 이상 45 이하의 숫자여야 합니다.");
    }

    return numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
