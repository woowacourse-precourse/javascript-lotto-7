import validateWinningNumber from '../validators/WinningNumberValidator.js';

class LottoChecker {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers); 
    this.#winningNumbers = winningNumbers;
  }

  #validateWinningNumbers(numbers) {
    validateWinningNumber(numbers);
  }
}

export default LottoChecker;