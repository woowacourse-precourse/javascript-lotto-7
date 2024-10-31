import {
  checkDuplicateBonusNumber,
  checkDuplicateWinningNumbers,
  checkIntegerBonusNumber,
  checkIntegerWinningNumbers,
  checkLengthWinningNumbers,
  checkMaxPrice,
  checkMinPrice,
  checkNumberPrice,
  checkRangeBonusNumber,
  checkRangeWinningNumbers,
  checkUnitPrice,
} from './util/validationUtil.js';

export default class Validator {
  static price(price) {
    checkNumberPrice(price);
    checkMinPrice(price);
    checkMaxPrice(price);
    checkUnitPrice(price);
  }

  static winningNumbers(winningNumbers) {
    checkLengthWinningNumbers(winningNumbers);
    checkIntegerWinningNumbers(winningNumbers);
    checkDuplicateWinningNumbers(winningNumbers);
    checkRangeWinningNumbers(winningNumbers);
  }

  static bonusNumber(winningNumbers, bonusNumber) {
    checkIntegerBonusNumber(bonusNumber);
    checkRangeBonusNumber(bonusNumber);
    checkDuplicateBonusNumber(winningNumbers, bonusNumber);
  }
}
