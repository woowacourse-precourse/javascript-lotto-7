import Validate from "./Validate";

class Bonus {
  #bonusNumber;
  constructor(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    const validate = new Validate();
    validate.validateBonusNumber(bonusNumber);
  }

  get value() {
    return this.#bonusNumber;
  }
}

export default Bonus;
