import InputValidator from './util/validators/InputValidator.js';
import { ErrorMessage } from './constants/ErrorMessage.js';
import { MagicNumber } from './constants/MagicNumber.js';

class LottoPrice {
  #price;

  constructor(price) {
    InputValidator.validateNotEmpty(price);
    InputValidator.validateIsNumber(price);
    InputValidator.validatePositive(price);
    this.#price = Number(price);
    this.validate(price);
  }

  validate(price) {
    if (price % MagicNumber.LOTTO_PRICE !== 0) {
      throw new Error(ErrorMessage.NOT_MULTIPLE_OF_1000);
    }
    if (price > MagicNumber.LIMIT_PRICE) {
      throw new Error(ErrorMessage.TOO_BIG_PRICE);
    }
  }
}
export default LottoPrice;
