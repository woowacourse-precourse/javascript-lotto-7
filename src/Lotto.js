import { VALID_LOTTERY_NUM } from "./constants/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== VALID_LOTTERY_NUM) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== VALID_LOTTERY_NUM) {
      throw new Error('[ERROR] 중복되지 않는 수 6개를 입력해주세요.');
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
