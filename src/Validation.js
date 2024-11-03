import Logic from './Logic.js';
import { Standard } from './Enum.js';

class Validation {
  static validatePurchaseAmount(input) {
    const num = Number(input);
    if (!isNaN(num) && num % Standard.PRICE_OF_LOTTO === 0 && num > 0)
      return true;
  }

  static validateWinningNumbers(input) {
    const numbers = Logic.parseWinningNumbers(input);
    if (
      !numbers.some((x) => isNaN(x)) &&
      numbers.length === Standard.LOTTO_NUM_LENGTH &&
      numbers.every(
        (x) =>
          x >= Standard.MIN_LOTTO_NUM &&
          x <= Standard.MAX_LOTTO_NUM &&
          new Set(numbers).size === 6
      )
    )
      return true;
  }

  static validateBonusNumber(lotto, input) {
    const number = Number(input);
    if (
      !isNaN(number) &&
      number >= Standard.MIN_LOTTO_NUM &&
      number <= Standard.MAX_LOTTO_NUM &&
      !lotto.getLottoNumber().some((e) => e === number)
    )
      return true;
  }
}
export default Validation;
