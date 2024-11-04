import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT } from "./constants/lottoRules.js"
import ERROR_MESSAGE from "./constants/errorMessages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NUMBERS_ARE_NOT_SIX);
    }
    numbers.forEach(element => {
      // 로또 범위 내 숫자인지 검증
      Lotto.isValidNumber(element);

      // 중복된 숫자인지 검증
      if (numbers.indexOf(element) !== numbers.lastIndexOf(element))
        throw new Error(ERROR_MESSAGE.NUMBERS_ARE_REPEATED);
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  static isValidNumber(number) {
    if (number < MIN_NUMBER || number > MAX_NUMBER)
      throw Error(ERROR_MESSAGE.NUMBER_IS_NOT_IN_RANGE);
  }
}

export default Lotto;
