import Lotto from './Lotto.js';
import validation from './validation.js';

export default class BonusNumber extends Lotto {
  #bonusNumber;
  constructor(winningNumber, bonusNumber) {
    super(winningNumber);
    this.#validate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumber, bonusNumber) {
    const validateCondition = Object.values(validation.bonusNumber);
    validateCondition.forEach((condition) => {
      condition(bonusNumber, winningNumber);
    });
  }
}
