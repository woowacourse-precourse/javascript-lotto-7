import { MESSAGES } from '../constants/Constants.js';
import LottoModel from '../model/LottoModel.js';

class PickBonusNumberValidator {
  static validateBonusNumber(pickBonusNumber, pickLottoNumber) {
    this.isSpace(pickBonusNumber);
    this.isCharacter(pickBonusNumber);
    this.isOutOfRange(pickBonusNumber);
    this.isDuplicatedNumber(pickBonusNumber, pickLottoNumber);
  }

  static isCharacter(pickBonusNumber) {
    if (isNaN(pickBonusNumber) || !Number.isInteger(Number(pickBonusNumber))) {
      throw new Error(`${MESSAGES.ERROR.PICK_BONUS_NUMBER.INVALID_TYPE}`);
    }
  }

  static isOutOfRange(pickBonusNumber) {
    if (pickBonusNumber < 1 || pickBonusNumber > 45) {
      throw new Error(`${MESSAGES.ERROR.PICK_BONUS_NUMBER.INVALID_RANGE}`);
    }
  }

  static isDuplicatedNumber(pickBonusNumber, pickLottoNumber) {
    if (pickLottoNumber.includes(pickBonusNumber)) {
      throw new Error(`${MESSAGES.ERROR.PICK_BONUS_NUMBER.DUPLICATED_NUMBER}`);
    }
  }

  static isSpace(pickBonusNumber) {
    if (pickBonusNumber === '') {
      throw new Error(`${MESSAGES.ERROR.PICK_BONUS_NUMBER.INVALID_TYPE}`);
    }
  }
}

export default PickBonusNumberValidator;
