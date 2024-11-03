import Validate from "./Validate.js";

class Bonus {
  #bonusNumber;
  constructor(bonusNumber, lottoNumbers) {
    this.#validate(bonusNumber, lottoNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, lottoNumbers) {
    const validate = new Validate();
    validate.validateBonusNumber(bonusNumber, lottoNumbers);
  }

  get value() {
    return this.#bonusNumber;
  }
}

export default Bonus;
