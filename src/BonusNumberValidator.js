import handleError from './utils/handleError.js';
import ERROR_MESSAGES from './constants/errorMessages.js';

class BonusNumberValidator {
  static isEmptyNumber(bonusNumber) {
    if (bonusNumber.length === 0) {
      handleError(ERROR_MESSAGES.BONUS_NUMBER_EMPTY);
    }
  }

  static isCountInvalid(bonusNumber) {
    if (bonusNumber.split(',').length > 1) {
      handleError(ERROR_MESSAGES.BONUS_NUMBER_COUNT_INVALID);
    }
  }

  static isFormatInvalid(bonusNumber) {
    if (!Number.isInteger(bonusNumber)) {
      handleError(ERROR_MESSAGES.BONUS_NUMBER_FORMAT_INVALID);
    }
  }

  static isOutOfRange(bonusNumber) {
    if (bonusNumber > 45 || bonusNumber < 1) {
      handleError(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
    }
  }

  static isNumberDuplicate(bonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(bonusNumber)) {
      handleError(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }

  static validateBonusNumber(inputBonusNumber, lottoNumbers) {
    this.isEmptyNumber(inputBonusNumber);
    this.isCountInvalid(inputBonusNumber);

    const bonusNumber = Number(inputBonusNumber);
    this.isFormatInvalid(bonusNumber);
    this.isOutOfRange(bonusNumber);
    this.isNumberDuplicate(bonusNumber, lottoNumbers);

    return bonusNumber;
  }
}

export default BonusNumberValidator;
