import InputValidator from './util/InputValidator.js';
import { ErrorMessage } from './constants/ErrorMessage.js';
import { MagicNumber } from './constants/MagicNumber.js';

class BonusNum {
  #number;

  constructor(bonusNumber, lottoNums) {
    InputValidator.validateNotEmpty(bonusNumber);
    InputValidator.validateIsNumber(bonusNumber);
    InputValidator.validatePositive(bonusNumber);
    this.#number = Number(bonusNumber);
    this.validate(this.#number, lottoNums);
  }

  validate(bonusNumber, lottoNums) {
    if (bonusNumber < MagicNumber.LOTTO_START || bonusNumber > MagicNumber.LOTTO_END) {
      throw new Error(ErrorMessage.OVER_RANGE);
    }
    if (lottoNums.getNumbers().includes(bonusNumber)) {
      throw new Error(ErrorMessage.EXIST_LOTTONUM);
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNum;
