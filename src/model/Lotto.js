import Validator from '../controller/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
