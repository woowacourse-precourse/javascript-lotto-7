import Logic from './Logic.js';

const standard = {
  LOTTO_NUM_LENGTH: 6,
  MIN_LOTTO_NUM: 1,
  MAX_LOTTO_NUM: 45,
  PRICE_OF_LOTTO: 1000,
};

class Validation {
  static validatePurchaseAmount(input) {
    const num = Number(input);
    if (!isNaN(num) && num % standard.PRICE_OF_LOTTO === 0 && num > 0)
      return true;
  }

  static validateWinningNumbers(input) {
    const numbers = Logic.parseWinningNumbers(input);
    if (
      !numbers.some((x) => isNaN(x)) &&
      numbers.length === standard.LOTTO_NUM_LENGTH &&
      numbers.every(
        (x) =>
          x >= standard.MIN_LOTTO_NUM &&
          x <= standard.MAX_LOTTO_NUM &&
          new Set(numbers).size === 6
      )
    )
      return true;
  }

  static validateBonusNumber(lotto, input) {
    const number = Number(input);
    if (
      !isNaN(number) &&
      number >= standard.MIN_LOTTO_NUM &&
      number <= standard.MAX_LOTTO_NUM &&
      !lotto.getLottoNumber().some((e) => e === number)
    )
      return true;
  }
}
export default Validation;
