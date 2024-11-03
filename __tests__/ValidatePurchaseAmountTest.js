import { PURCHASE_AMOUNT_TEST_MESSAGES } from '../src/constants/testMessages.js';
import { PURCHASE_AMOUNT_MESSAGES } from '../src/constants/errorMessages.js';
import { TEST_INPUTS } from '../src/constants/testValues.js';
import ValidatePurchaseAmount from '../src/models/ValidatePurchaseAmount.js';

describe(PURCHASE_AMOUNT_TEST_MESSAGES.PURCHASE_AMOUNT_TEST, () => {
  let validator;

  beforeEach(() => {
    validator = new ValidatePurchaseAmount();
  });

  test(PURCHASE_AMOUNT_TEST_MESSAGES.NOT_THOUSAND_UNIT, () => {
    expect(() => {
      validator.validatePurchaseAmount(TEST_INPUTS.INVALID_AMOUNT);
    }).toThrow(PURCHASE_AMOUNT_MESSAGES.NOT_THOUSAND_UNIT);
  });

  test(PURCHASE_AMOUNT_TEST_MESSAGES.NOT_A_NUMBER, () => {
    expect(() => {
      validator.validatePurchaseAmount(TEST_INPUTS.INVALID_NUMBER);
    }).toThrow(PURCHASE_AMOUNT_MESSAGES.NOT_A_NUMBER);
  });

  test(PURCHASE_AMOUNT_TEST_MESSAGES.OVERFLOW, () => {
    expect(() => {
      validator.validatePurchaseAmount(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow(PURCHASE_AMOUNT_MESSAGES.OVERFLOW(Number.MAX_SAFE_INTEGER));
  });

  test(PURCHASE_AMOUNT_TEST_MESSAGES.VALID_AMOUNT, () => {
    expect(() => {
      validator.validatePurchaseAmount(TEST_INPUTS.VALID_AMOUNT);
    }).not.toThrow();

    expect(() => {
      validator.validatePurchaseAmount(
        `${parseInt(TEST_INPUTS.VALID_AMOUNT) * 2}`,
      );
    }).not.toThrow();
  });
});
