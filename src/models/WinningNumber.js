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

  constructor(value) {
    const numbers = parseByComma(value);
    this.#validateWinningNumbers(numbers);
    this.#winningNumbers = setElementsToNumber(numbers);
  }


  #validateWinningNumbers(numbers) {
    !validator.isLengthSix(numbers) && throwError(error.LENGTH_NOT_SIX);

    !validator.isAllNumber(numbers) && throwError(error.NOT_IN_RANGE);
    !validator.isLottoRange(numbers) && throwError(error.NOT_IN_RANGE);

    !validator.isUnique(numbers) && throwError(error.DUPLICATED);
  }
}

export default WinningNumber;
