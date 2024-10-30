import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validate(numbers); // 외부 Validator 클래스를 사용하여 검증
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
