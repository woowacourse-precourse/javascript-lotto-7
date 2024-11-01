import ERROR_MESSAGES from './constants/errorMessages.js';
import { AMOUNT, CONTEXT, NUMBER } from './constants/constants.js';
import throwError from './utils/error.js';

class Validator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = this.#convertToNumber(input);
    this.#validateAmountRange(purchaseAmount);
  }

  static validateLotto(numbers) {
    this.#validateNumbers(numbers, 6, CONTEXT.LOTTO);
  }

  static validateWinningNumbers(numbers) {
    this.#validateNumbers(numbers, 6, CONTEXT.WINNING);
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validateInteger(bonusNumber, CONTEXT.BONUS);
    this.#validateSingleNumberInRange(bonusNumber, CONTEXT.BONUS);

    if (winningNumbers.includes(bonusNumber)) throwError(ERROR_MESSAGES.INVALID_BONUS_DUPLICATE);
  }

  static #validateNumbers(numbers, length = 6, context = CONTEXT.DEFAULT) {
    this.#validateLength(numbers, length, context);
    this.#validateNumberRange(numbers, context);
    this.#validateDuplicates(numbers, context);
  }

  static #convertToNumber(input) {
    const number = Number(input);

    if (Number.isNaN(number)) throwError(ERROR_MESSAGES.PURCHASE_AMOUNT_NOT_NUMBER);

    return number;
  }

  static #validateAmountRange(amount) {
    if (amount < AMOUNT.MIN) throwError(ERROR_MESSAGES.PURCHASE_AMOUNT_MIN(AMOUNT.MIN));

    if (amount > AMOUNT.MAX) throwError(ERROR_MESSAGES.PURCHASE_AMOUNT_MAX(AMOUNT.MAX));

    if (amount % AMOUNT.UNIT !== 0) throwError(ERROR_MESSAGES.PURCHASE_AMOUNT_UNIT(AMOUNT.UNIT));
  }

  static #validateLength(numbers, length, context) {
    if (numbers.length !== NUMBER.EXPECTED_LENGTH)
      throwError(ERROR_MESSAGES.INVALID_NUMBER_COUNT(context, length));
  }

  static #validateDuplicates(numbers, context) {
    if (new Set(numbers).size !== numbers.length)
      throwError(ERROR_MESSAGES.INVALID_DUPLICATE__NUMBER(context));
  }

  static #validateNumberRange(numbers, context) {
    numbers.forEach((number) => {
      this.#validateInteger(number, context);
      this.#validateSingleNumberInRange(number, context);
    });
  }

  static #validateInteger(number, context) {
    if (!Number.isInteger(number)) throwError(ERROR_MESSAGES.INVALID_NUMBER_TYPE(context));
  }

  static #validateSingleNumberInRange(number, context) {
    if (number < NUMBER.MIN_RANGE || number > NUMBER.MAX_RANGE)
      throwError(ERROR_MESSAGES.INVALID_NUMBER_RANGE(context, NUMBER.MIN_RANGE, NUMBER.MAX_RANGE));
  }
}

export default Validator;
