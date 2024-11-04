import { lottoNumberDuplicationCheckException, lottoNumberOutOfRangeException } from "./Exception/validation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    lottoNumberDuplicationCheckException(numbers);
    lottoNumberOutOfRangeException(numbers);
  }

  // TODO: 추가 기능 구현
  getLotto(){
    return this.#numbers;
  }
}

export default Lotto;
