import BonusNumberValidations from '../validations/BonusNumberValidations.js';

class Bonus {
  #bonusNumber;

  constructor (bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    BonusNumberValidations(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;