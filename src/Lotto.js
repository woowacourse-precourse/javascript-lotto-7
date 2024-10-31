import Validator from "./Validator";
class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkSixNumbers(numbers);
    Validator.checkDuplicateNumber(numbers);
    this.#numbers = numbers;
  }
  
  // TODO: 추가 기능 구현
}

export default Lotto;
