import validateWinningNumber from '../validators/WinningNumberValidator.js';
import validateBonusNumber from '../validators/BonusNumberValidator.js';

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

  #validateBonusNumber(bonusNumber) {
    validateBonusNumber(bonusNumber, this.#winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber); 
    this.#bonusNumber = bonusNumber;      
  }
}

export default LottoChecker;