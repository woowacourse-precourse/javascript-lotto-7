import MoneyValidation from './MoneyValidation.js';
import ERROR from '../constants/ErrorMessage.js';

class Money {
  static validate(money) {
    if (MoneyValidation.checkIsEmpty(money))
      throw new Error(ERROR.PREFIX + ERROR.EMPTY);
    if (MoneyValidation.checkIsNaN(money))
      throw new Error(ERROR.PREFIX + ERROR.IS_NAN);
  }
}
export default Money;
