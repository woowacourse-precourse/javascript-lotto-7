import { LOTTO_COUNT } from "./constants/lottoValue.js";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers - 로또 번호 배열.
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== LOTTO_COUNT) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

  // TODO: 추가 기능 구현
  }
}

export default Lotto;
