import Validate from "./Validate";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validate = new Validate();
    validate.validateLottoNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }

  matchedCount(lottoNumbers) {
    return this.#numbers.filter((number) => lottoNumbers.includes(number))
      .length;
  }
}

export default Lotto;
