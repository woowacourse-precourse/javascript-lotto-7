import Validation from "./Validation.js";
import { ERROR_MESSAGE as ERROR } from "./constants/errorMessage.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.checkNumbersLength(numbers);
    numbers.forEach((number) => {
      Validation.checkIsNumber(number);
      Validation.checkNumberRange(number);
    })
  }

  // TODO: 추가 기능 구현
  get getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
