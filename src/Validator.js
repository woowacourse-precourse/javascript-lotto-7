import ERROR_MESSAGE from './Error.js';

class Validator {
  validateMoney(moneyInput) {
    const money = Number(moneyInput);
    if (moneyInput === '' || Number.isNaN(money)) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (money < 0) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.MONEY_INPUT_MINIMUM_ERROR}`);
    }
    if (money % 1000 !== 0) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.MONEY_INPUT_DIVISIBILITY_ERROR}`);
    }
  }

  validateLotto(lottoNumber) {
    if (lottoNumber.some(number => Number.isNaN(number))) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.LOTTO_NUMBER_INPUT_ERROR}`);
    }
    if (lottoNumber.length !== 6) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.LOTTO_NUMBER_COUNT_ERROR}`);
    }
    if (lottoNumber.some(number => number < 1 || number > 45)) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR}`);
    }
    if (this.hasDuplicateNumber(lottoNumber)) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATION_ERROR}`);
    }
    if (lottoNumber.some(number => !Number.isInteger(number))) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
    }
  }

  hasDuplicateNumber(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size !== numbers.length;
  }

  validateBonusNumber(bonusNumberInput, lottoNumber) {
    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumberInput === '' || Number.isNaN(bonusNumber)) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (bonusNumber > 45 || bonusNumber < 1) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR}`);
    }
    if (lottoNumber.findIndex(number => number === bonusNumber) !== -1) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR}`);
    }
    if (!Number.isInteger(bonusNumber)) {
      throw Error(`[ERROR] ${ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
    }
  }
}

export default Validator;
