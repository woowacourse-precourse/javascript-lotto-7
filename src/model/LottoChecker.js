import validateWinningNumber from '../validators/WinningNumberValidator.js';
import validateBonusNumber from '../validators/BonusNumberValidator.js';
import { splitByDelimiter } from '../utils/game.js';

class LottoChecker {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = splitByDelimiter(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getMatchResults(lottoNumbersList) {
    return lottoNumbersList.map(lottoNumbers => ({
      matchCount: this.#calculateMatchCount(lottoNumbers),
      isBonusMatched: this.#checkBonusMatch(lottoNumbers),
    }));
  }

  #validateWinningNumbers(numbers) {
    validateWinningNumber(numbers);
  }

  #validateBonusNumber(bonusNumber) {
    validateBonusNumber(bonusNumber, this.#winningNumbers);
  }

  #calculateMatchCount(lottoNumbers) {
    return this.#winningNumbers.filter(number => lottoNumbers.includes(number)).length;
  }

  #checkBonusMatch(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
}

export default LottoChecker;
