import { validateNumberRange } from './validate.js';

class BonusLotto {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    validateNumberRange(number);
  }

  createBonusLotto() {
    return this.#number;
  }
}

export default BonusLotto;
