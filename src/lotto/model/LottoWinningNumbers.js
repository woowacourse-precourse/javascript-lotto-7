import { createWinningNumberValidator } from '../validate/ValidatorCreator.js';

const winningNumberValidator = createWinningNumberValidator();

class LottoWinningNumbers {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers.map(Number);
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  set bonusNumber(number) {
    this.#validateBonusNumber(this.#winningNumbers, number);
    this.#bonusNumber = Number(number);
  }

  #validateWinningNumbers = (winningNumbers) => {
    winningNumberValidator.validateWinningNumbers(winningNumbers);
  }

  #validateBonusNumber(winningNumbers, bonusNumber) {
    winningNumberValidator.validateBonusNumber(winningNumbers, bonusNumber);
  }
}

export default LottoWinningNumbers;