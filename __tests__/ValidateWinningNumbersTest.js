import ValidateWinningNumbers from '../src/models/ValidateWinningNumbers.js';
import { WINNING_NUMBERS_TEST_MESSAGES } from '../src/constants/testMessages.js';
import { WINNING_NUMBERS_MESSAGES } from '../src/constants/errorMessages.js';
import { TEST_NUMBERS, TEST_INPUTS } from '../src/constants/testValues.js';

describe(WINNING_NUMBERS_TEST_MESSAGES.WINNING_NUMBERS_TEST, () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateWinningNumbers();
  });

  test(WINNING_NUMBERS_TEST_MESSAGES.INVALID_FORMAT, () => {
    expect(() => {
      validator.validateWinningNumbersFormat(
        TEST_INPUTS.INVALID_FORMAT_NUMBERS,
      );
    }).toThrow(WINNING_NUMBERS_MESSAGES.INVALID_FORMAT);
  });

  test(WINNING_NUMBERS_TEST_MESSAGES.INVALID_COUNT, () => {
    expect(() => {
      validator.validateWinningNumbersFormat(TEST_INPUTS.INVALID_COUNT_NUMBERS);
    }).toThrow(WINNING_NUMBERS_MESSAGES.INVALID_FORMAT);
  });

  test(WINNING_NUMBERS_TEST_MESSAGES.OUT_OF_RANGE, () => {
    expect(() => {
      validator.validateNumberRange(TEST_NUMBERS.OUT_OF_RANGE_LOW);
    }).toThrow(WINNING_NUMBERS_MESSAGES.INVALID_RANGE);

    expect(() => {
      validator.validateNumberRange(TEST_NUMBERS.OUT_OF_RANGE_HIGH);
    }).toThrow(WINNING_NUMBERS_MESSAGES.INVALID_RANGE);
  });

  test(WINNING_NUMBERS_TEST_MESSAGES.DUPLICATE_NUMBERS, () => {
    expect(() => {
      validator.validateDuplicateNumbers(TEST_NUMBERS.DUPLICATE_NUMBERS);
    }).toThrow(WINNING_NUMBERS_MESSAGES.DUPLICATE_NUMBERS);
  });

  test(WINNING_NUMBERS_TEST_MESSAGES.VALID_NUMBERS, () => {
    expect(() => {
      validator.validateWinningNumbersFormat(TEST_INPUTS.VALID_WINNING_NUMBERS);
      validator.validateDuplicateNumbers(TEST_NUMBERS.VALID_NUMBERS);
      TEST_NUMBERS.VALID_NUMBERS.forEach((num) =>
        validator.validateNumberRange(num),
      );
    }).not.toThrow();
  });
});
