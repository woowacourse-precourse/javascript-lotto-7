import BonusNumberValidations from '../validations/BonusNumberValidations.js';

class Bonus {
  #bonusNumber;

  constructor (bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, winningNumbers) {
    BonusNumberValidations(bonusNumber, winningNumbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;