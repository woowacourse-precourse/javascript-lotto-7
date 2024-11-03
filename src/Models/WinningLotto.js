import InputParser from './InputParser.js';
import Lotto from './Lotto.js';

class WinningLotto {
  #winningLotto;
  constructor(winningNumberInput) {
    const winningNumbers = this.#parser(winningNumberInput);
    this.#winningLotto = new Lotto(winningNumbers);
  }

  #parser(winningNumberInput) {
    const winningNumbers = InputParser.numbers(winningNumberInput);
    return winningNumbers;
  }

  get numbers() {
    return this.#winningLotto.numbers;
  }
}

export default WinningLotto;
