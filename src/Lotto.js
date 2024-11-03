import { ERROR_MESSAGES } from "./Model/Error";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  // 현재 로또 번호를 반환하는 메서드
  getNumbers() {
    return this.#numbers;
  }

  // numbers의 유효성을 검사하는 private 메서드
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호의 범위는 1~45입니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}

export default Lotto;
