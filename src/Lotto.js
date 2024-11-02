import Exception from "./exceptionHandling.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    let exception = new Exception();
    exception.validateWinNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
