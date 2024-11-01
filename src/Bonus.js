import Validate from "./Validate.js";

class Bonus {
  #bonusNumber;
  constructor(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  validate(lottoNumbers) {
    const validate = new Validate();
    validate.validateBonusNumber(this.#bonusNumber, lottoNumbers);
  }

  get value() {
    return this.#bonusNumber;
  }
}

export default Bonus;
