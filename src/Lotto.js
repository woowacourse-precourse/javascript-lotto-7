import ErrorCollection from "./ErrorCollection.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const errorCollection = new ErrorCollection();
    errorCollection.checkLottoNumberCount(numbers);
    errorCollection.checkLottoNumberIntegers(numbers);
    errorCollection.checkLottoNumberRange(numbers);
    errorCollection.checkLottoNumberDuplicates(numbers);
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
