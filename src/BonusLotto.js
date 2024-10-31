import Validator from './Validator.js';

class BonusLotto {
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    Validator.validateBonusLottoNumber(winningNumbers, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusLotto;
