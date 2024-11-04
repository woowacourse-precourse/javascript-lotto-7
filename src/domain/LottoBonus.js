import BonusNumberValidations from '../validations/BonusNumberValidations.js';

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
    BonusNumberValidations(bonusNumber, winningNumbers);
  }
}

export default LottoBonus;
