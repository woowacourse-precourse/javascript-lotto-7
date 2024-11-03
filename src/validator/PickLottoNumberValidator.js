import { MESSAGES } from '../constants/Constants.js';

class PickLottoNumberValidator {
  static validatePickLottoNumber(pickLottoNumber) {
    const pickLottoNumberArray = pickLottoNumber.split(',').map(Number);
    this.isAnotherCharacter(pickLottoNumberArray);
    this.isRightCount(pickLottoNumberArray);
    this.isOutOfRange(pickLottoNumberArray);
    this.isDuplicatedNumber(pickLottoNumberArray);
  }

  static isAnotherCharacter(pickLottoNumberArray) {
    if (pickLottoNumberArray.some((number) => !Number.isInteger(number))) {
      throw new Error(`${MESSAGES.ERROR.PICK_LOTTO_NUMBER.INVALID_CHARACTER}`);
    }
  }

  static isRightCount(pickLottoNumberArray) {
    if (pickLottoNumberArray.length !== 6) {
      throw new Error(`${MESSAGES.ERROR.PICK_LOTTO_NUMBER.INVALID_COUNT}`);
    }
  }

  static isOutOfRange(pickLottoNumberArray) {
    if (pickLottoNumberArray.some((number) => number < 1 || number > 45)) {
      throw new Error(`${MESSAGES.ERROR.PICK_LOTTO_NUMBER.INVALID_RANGE}`);
    }
  }

  static isDuplicatedNumber(pickLottoNumberArray) {
    if (pickLottoNumberArray.length !== new Set(pickLottoNumberArray).size) {
      throw new Error(`${MESSAGES.ERROR.PICK_LOTTO_NUMBER.DUPLICATED_NUMBER}`);
    }
  }
}

export default PickLottoNumberValidator;
