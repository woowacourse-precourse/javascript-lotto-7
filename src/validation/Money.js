import MoneyValidation from './MoneyValidation.js';
import ERROR from '../constants/ErrorMessage.js';

class Money {
  static validate(money) {
    if (MoneyValidation.checkIsEmpty(money))
      throw new Error(ERROR.PREFIX + ERROR.EMPTY);
  }
}
export default Money;
