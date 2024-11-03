import MoneyValidation from './MoneyValidation.js';
import ERROR from '../constants/ErrorMessage.js';

class Money {
  static validate(money) {
    if (MoneyValidation.checkIsEmpty(money))
      throw `${ERROR.PREFIX + ERROR.EMPTY}`;
    if (MoneyValidation.checkIsNaN(money))
      throw `${ERROR.PREFIX + ERROR.IS_NAN}`;
    if (MoneyValidation.checkLessThanPrice(money))
      throw `${ERROR.PREFIX + ERROR.PRICE}`;
    if (MoneyValidation.checkPriceUnit(money))
      throw `${ERROR.PREFIX + ERROR.UNIT}`;
    return money;
  }
}
export default Money;
