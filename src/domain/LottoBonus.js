import validateBonusNumber from '../validations/validateBonusNumber.js';

class LottoBonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(bonusNumber, winningNumbers) {
    validateBonusNumber(bonusNumber, winningNumbers);
  }
}

export default LottoBonus;
