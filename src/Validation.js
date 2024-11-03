import Logic from './Logic.js';

class Validation {
  static validatePurchaseAmount(input) {
    const num = Number(input);
    if (!isNaN(num) && num % 1000 === 0 && num > 0) return true;
  }

  static validateWinningNumbers(input) {
    const numbers = Logic.parseWinningNumbers(input);
    if (
      !numbers.some((x) => isNaN(x)) &&
      numbers.length === 6 &&
      numbers.every((x) => x > 0 && x < 46 && new Set(numbers).size === 6)
    )
      return true;
  }

  static validateBonusNumber(lotto, input) {
    const number = Number(input);
    if (
      !isNaN(number) &&
      number >= 1 &&
      number <= 45 &&
      !lotto.getLottoNumber().some((e) => e === number)
    )
      return true;
  }
}
export default Validation;
