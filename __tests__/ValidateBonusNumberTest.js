import ValidateBonusNumber from '../src/models/ValidateBonusNumber.js';
import { BONUS_NUMBER_TEST_MESSAGES } from '../src/constants/testMessages.js';
import { BONUS_NUMBER_MESSAGES } from '../src/constants/errorMessages.js';
import { TEST_NUMBERS } from '../src/constants/testValues.js';

describe(BONUS_NUMBER_TEST_MESSAGES.BONUS_NUMBER_TEST, () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateBonusNumber();
  });

  test(BONUS_NUMBER_TEST_MESSAGES.NOT_A_NUMBER, () => {
    expect(() => {
      validator.validateIsNumber('a');
    }).toThrow(BONUS_NUMBER_MESSAGES.NOT_A_NUMBER);
  });

  test(BONUS_NUMBER_TEST_MESSAGES.OUT_OF_RANGE, () => {
    expect(() => {
      validator.validateBonusNumberRange(TEST_NUMBERS.OUT_OF_RANGE_HIGH);
    }).toThrow(BONUS_NUMBER_MESSAGES.INVALID_RANGE);

    expect(() => {
      validator.validateBonusNumberRange(TEST_NUMBERS.OUT_OF_RANGE_LOW);
    }).toThrow(BONUS_NUMBER_MESSAGES.INVALID_RANGE);
  });

  test(BONUS_NUMBER_TEST_MESSAGES.DUPLICATE_WITH_WINNING, () => {
    expect(() => {
      validator.validateDuplicateWithWinningNumbers(
        1,
        TEST_NUMBERS.VALID_NUMBERS,
      );
    }).toThrow(BONUS_NUMBER_MESSAGES.DUPLICATE_WITH_WINNING);
  });

  test(BONUS_NUMBER_TEST_MESSAGES.VALID_NUMBER, () => {
    expect(() => {
      validator.validateBonusNumber('7', TEST_NUMBERS.VALID_NUMBERS);
    }).not.toThrow();
  });
});
