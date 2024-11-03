import Exception from "../component/Exception.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    Exception.lottoException(numbers);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
