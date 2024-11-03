import Validate from './Validate.js';
class Lotto {
  #numbers;
  #lottos;
  constructor(numbers) {
    Validate.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }
}

export default Lotto;
