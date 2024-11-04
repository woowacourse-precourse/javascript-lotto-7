import validators from "./utils/Validators.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validators.checkLottoLength(numbers);
    validators.checkDuplicateNumber(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
