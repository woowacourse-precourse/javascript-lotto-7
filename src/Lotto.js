import LottoValidator from "./LottoValidator";

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
