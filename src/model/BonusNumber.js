import Validator from '../controller/Validator.js';

class BonusNumber {
  constructor(bonusNumber) {
    Validator.checkBonusNumber(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return Number.parseInt(this.bonusNumber);
  }
}

export default BonusNumber;
