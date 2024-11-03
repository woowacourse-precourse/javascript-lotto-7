import Lotto from './Lotto.js';

export default class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.validateWinningNumbers(winningNumbers);
    this.validateBonusNumber(bonusNumber);
  }

  validateWinningNumbers(winningNumbers) {
    const splittedNumbers = winningNumbers.split(',').map(Number);
    const lotto = new Lotto(splittedNumbers);
    this.#winningNumbers = lotto.getSortedNumbers();
  }
}
