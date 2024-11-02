import * as validator from '../utils/validator.js';
import throwError from '../utils/throwError.js';
import * as error from '../constants/error.js';

function parseByComma(value) {
  return value.split(',');
}

function setElementsToNumber(array) {
  return array.map((element) => Number(element));
}

class WinningNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(value) {
    const numbers = parseByComma(value);
    this.#validateWinningNumbers(numbers);
    this.#winningNumbers = setElementsToNumber(numbers);
  }

  setBonusNumber(value) {
    this.#validateBonusNumber(value);
    const number = Number(value);
    this.#bonusNumber = number;
  }

  #validateWinningNumbers(numbers) {
    !validator.isLengthSix(numbers) && throwError(error.LENGTH_NOT_SIX);

    !validator.isAllNumber(numbers) && throwError(error.NOT_IN_RANGE);
    !validator.isLottoRange(numbers) && throwError(error.NOT_IN_RANGE);

    !validator.isUnique(numbers) && throwError(error.DUPLICATED);
  }

  #validateBonusNumber(number) {
    !validator.isNumber(number) && throwError(error.NOT_IN_RANGE);
    !validator.isLottoRange([number]) && throwError(error.NOT_IN_RANGE);

    validator.isBonusNumberDuplicated(this.#winningNumbers, number) &&
      throwError(error.BONUS_NUMBER_DUPLICATED);
  }
}

export default WinningNumber;
