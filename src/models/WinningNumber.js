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

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(value) {
    this.#validateBonusNumber(value);
    const number = Number(value);
    this.#bonusNumber = number;
  }

  #validateWinningNumbers(numbers) {
    !validator.isLengthLottoCount(numbers) && throwError(error.LENGTH_NOT_SIX);

    !validator.isAllInteger(numbers) && throwError(error.NOT_IN_RANGE);
    !validator.isLottoRange(numbers) && throwError(error.NOT_IN_RANGE);

    !validator.isUnique(numbers) && throwError(error.DUPLICATED);
  }

  #validateBonusNumber(number) {
    !validator.isInteger(number) && throwError(error.NOT_IN_RANGE);
    !validator.isLottoRange([number]) && throwError(error.NOT_IN_RANGE);

    validator.isBonusNumberDuplicated(this.#winningNumbers, number) &&
      throwError(error.BONUS_NUMBER_DUPLICATED);
  }
}

export default WinningNumber;
