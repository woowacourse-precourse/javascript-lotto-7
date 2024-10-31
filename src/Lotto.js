import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #sortNumbers(numbers) {
    return [...numbers].sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber,
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
