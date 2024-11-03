import Lotto from './Lotto.js';

export default class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  static validateWinningNumbers(winningNumbers) {
    const splittedNumbers = winningNumbers.split(',').map(Number);
    const validLottoNumbers = Lotto.validate(splittedNumbers);
    return validLottoNumbers;
  }

  setWinningNumbers(winningNumbers) {
    const validWinningNumbers =
      WinningLotto.validateWinningNumbers(winningNumbers);
    this.#winningNumbers = validWinningNumbers;
  }
}
