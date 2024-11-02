import Validator from './Validator.js';
import { parseNumbers } from '../utils/Parser.js';
import WinningNumbers from '../model/WinningNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const winningNumbers = new WinningNumbers(numbers);
    this.#numbers = winningNumbers.getWinningNumbers();
    const bonusNumber = winningNumbers.getBonusNumber();
  }
}

export default Lotto;
