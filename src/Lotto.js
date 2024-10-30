import InputValidate from "./utils/InputValidate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.error = new InputValidate();
    this.#validate(numbers);
    this.#numbers = numbers.split(',').map(Number);
  }

  #validate(numbers) {
    this.error.lottoNumberValidate(numbers);
  }
  // TODO: 추가 기능 구현

}

export default Lotto;
