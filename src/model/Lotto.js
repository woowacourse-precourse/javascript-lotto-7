import LottoValidate from "../validate/LottoValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    LottoValidate.validateIsNumber(numbers);
    LottoValidate.validateLottoLength(numbers);
    LottoValidate.validateLottoDup(numbers);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
