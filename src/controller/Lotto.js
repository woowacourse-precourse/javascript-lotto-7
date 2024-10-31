import InputView from '../view/InputView.js';
import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateWinningNumbers(numbers);
    this.#numbers = numbers;
  }
}

export default Lotto;
