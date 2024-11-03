import BonusValidate from "../validation/BonusValidate.js";
import Validate from "../validation/Validate.js";

class Bonus {
  #bonus;
  #lotto;

  constructor(bonus, lotto) {
    this.#validate(bonus, lotto);
    this.#lotto = lotto;
  }

  #validate(bonus, lotto) {
    const validate = new BonusValidate();
    validate.validateBonus(bonus, lotto);
  }
}

export default Bonus;
