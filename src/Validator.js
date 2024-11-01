import ERROR_MESSAGES from './constants/errorMessages.js';
import { AMOUNT, CONTEXT, NUMBER } from './constants/constants.js';
import throwError from './utils/error.js';

class Validator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = this.#convertToNumber(input);
    this.#validateAmountRange(purchaseAmount);
  }

  static validateLotto(numbers) {
    this.#validateNumbers(numbers, 6, CONTEXT.lotto);
  }

  static validateWinningNumbers(numbers) {
    this.#validateNumbers(numbers, 6, CONTEXT.winning);
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validateInteger(bonusNumber, CONTEXT.bonus);
    this.#validateSingleNumberInRange(bonusNumber, CONTEXT.bonus);

    if (winningNumbers.includes(bonusNumber)) throwError(ERROR_MESSAGES.invalid_bonus_duplicate);
  }

  static #validateNumbers(numbers, length = 6, context = CONTEXT.default) {
    this.#validateLength(numbers, length, context);
    this.#validateNumberRange(numbers, context);
    this.#validateDuplicates(numbers, context);
  }

  static #convertToNumber(input) {
    const number = Number(input);

    if (Number.isNaN(number)) throwError(ERROR_MESSAGES.purchase_amount_not_number);

    return number;
  }

  static #validateAmountRange(amount) {
    if (amount < AMOUNT.min) throwError(ERROR_MESSAGES.purchase_amount_min(AMOUNT.min));

    if (amount > AMOUNT.max) throwError(ERROR_MESSAGES.purchase_amount_max(AMOUNT.max));

    if (amount % AMOUNT.unit !== 0) throwError(ERROR_MESSAGES.purchase_amount_unit(AMOUNT.unit));
  }

  static #validateLength(numbers, length, context) {
    if (numbers.length !== NUMBER.expected_length)
      throwError(ERROR_MESSAGES.invalid_number_count(context, length));
  }

  static #validateDuplicates(numbers, context) {
    if (new Set(numbers).size !== numbers.length)
      throwError(ERROR_MESSAGES.invalid_duplicate_number(context));
  }

  static #validateNumberRange(numbers, context) {
    numbers.forEach((number) => {
      this.#validateInteger(number, context);
      this.#validateSingleNumberInRange(number, context);
    });
  }

  static #validateInteger(number, context) {
    if (!Number.isInteger(number)) throwError(ERROR_MESSAGES.invalid_number_type(context));
  }

  static #validateSingleNumberInRange(number, context) {
    if (number < NUMBER.min_range || number > NUMBER.max_range)
      throwError(ERROR_MESSAGES.invalid_number_range(context, NUMBER.min_range, NUMBER.max_range));
  }
}

export default Validator;
