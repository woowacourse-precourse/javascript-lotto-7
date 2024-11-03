import { ERROR_MESSAGES } from '../constants/messages.js';
import {
  LOTTO_CONDITION,
  PRICE_MAX_AMOUNT,
  PRICE_PER_LOTTO,
} from '../constants/constants.js';

class LottoValidator {
  validatePurchaseAmount(amount) {
    if (this.#isEmpty(amount)) throw new Error(ERROR_MESSAGES.empty);

    if (this.#isNotNumeric(amount)) throw new Error(ERROR_MESSAGES.numeric);

    if (this.#isNotPositive(amount)) throw new Error(ERROR_MESSAGES.positive);

    if (this.#isInvalidAmount(amount))
      throw new Error(ERROR_MESSAGES.invalid_amount);

    if (this.#isExceedRange(amount))
      throw new Error(ERROR_MESSAGES.exceed_range);
  }

  validateLottoNumber(numbers) {
    if (this.#hasInvalidNumber(numbers))
      throw new Error(ERROR_MESSAGES.invalid_lotto_input);

    if (this.#isInvalidLottoLength(numbers))
      throw new Error(ERROR_MESSAGES.invalid_lotto_length);

    if (this.#hasOutOfRange(numbers))
      throw new Error(ERROR_MESSAGES.invalid_lotto_range);

    if (this.#isDuplicate(numbers))
      throw new Error(ERROR_MESSAGES.invalid_lotto_unique);
  }

  // 공통
  #isNotNumeric(input) {
    return Number.isNaN(Number(input));
  }

  // validatePurchaseAmount 관련
  #isEmpty(input) {
    return input == null || input.trim() === '';
  }

  #isNotPositive(input) {
    return Number(input) <= 0;
  }

  #isInvalidAmount(input) {
    return Number(input) % PRICE_PER_LOTTO !== 0;
  }

  #isExceedRange(input) {
    return Number(input) > PRICE_MAX_AMOUNT;
  }

  // validateWinningLotto 관련
  #hasInvalidNumber(numbers) {
    return numbers.some((number) => this.#isNotNumeric(number));
  }

  #isInvalidLottoLength(numbers) {
    return numbers.length !== LOTTO_CONDITION.length;
  }

  #hasOutOfRange(numbers) {
    return numbers.some((number) => this.#isInvalidLottoRange(number));
  }

  #isInvalidLottoRange(number) {
    return !(
      number >= LOTTO_CONDITION.startRange && number <= LOTTO_CONDITION.endRange
    );
  }

  #isDuplicate(numbers) {
    return new Set(numbers).size !== LOTTO_CONDITION.length;
  }
}

export default LottoValidator;
