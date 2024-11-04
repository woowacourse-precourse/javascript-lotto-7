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

  static checkPriceUnit(money) {
    return !(money % LOTTO.LOTTO_PRICE === 0);
  }
}
export default MoneyValidation;
