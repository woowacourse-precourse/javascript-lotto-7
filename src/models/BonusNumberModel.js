import { validateBonusNumberPipe } from "../validation/validateBonusNumber/validateBonusNumberPipe.js";

class BonusNumberModel {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, winningNumbers) {
    validateBonusNumberPipe(bonusNumber, winningNumbers);
  }
}

export default BonusNumberModel;
