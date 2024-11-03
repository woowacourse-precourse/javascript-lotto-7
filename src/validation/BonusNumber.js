import ERROR from '../constants/ErrorMessage.js';
import BonusNumberValidation from './BonusNumberValidation.js';

class BonusNumber {
  static validate(number, winningNumbers) {
    if (BonusNumberValidation.checkIsEmpty(number))
      throw `${ERROR.PREFIX + ERROR.EMPTY}`;
    if (BonusNumberValidation.checkIsNaN(number))
      throw `${ERROR.PREFIX + ERROR.IS_NAN}`;
    if (BonusNumberValidation.checkInRange(number))
      throw `${ERROR.PREFIX + ERROR.RANGE}`;
    if (BonusNumberValidation.checkDuplicate(number, winningNumbers))
      throw `${ERROR.PREFIX + ERROR.BONUS_DUPLICATE}`;
    return Number(number);
  }
}
export default BonusNumber;
