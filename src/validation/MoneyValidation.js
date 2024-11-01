import LOTTO from '../constants/Lotto.js';

class MoneyValidation {
  static checkIsEmpty(money) {
    return money.trim() === '';
  }

  static checkIsNaN(money) {
    const number = Number(money);
    return !Number.isInteger(number) || Number.isNaN(money);
  }

  static checkLessThanPrice(money) {
    return Number(money) < LOTTO.LOTTO_PRICE;
  }
}
export default MoneyValidation;
