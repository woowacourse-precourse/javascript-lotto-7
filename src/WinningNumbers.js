import { validateWinningNumbers } from './validate.js';

class WinningNumbers {
  #numbers;
  #bonusNumber;

  constructor(winningNumbers) {
    validateWinningNumbers(winningNumbers);
    this.#numbers = winningNumbers.map(Number);
  }
}

export default WinningNumbers;
