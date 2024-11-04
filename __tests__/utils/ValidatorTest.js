import Validator from '../../src/utils/Validator';
import { ERROR_MESSAGES } from '../../src/constants/messages';
import REGEX from '../../src/constants/regex';

// 유효하지 않은 금액 테스트
test.each([
  { amount: '', error: ERROR_MESSAGES.EMPTY_INPUT },
  { amount: '0', error: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
  { amount: '101000', error: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
  { amount: '2500', error: ERROR_MESSAGES.INVALID_AMOUNT_UNIT },
  { amount: '-1000', error: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
  { amount: 'abc', error: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
])('[유효하지 않은 금액 검사] "$amount" 입력 시 예외가 발생한다 : $error', ({ amount, error }) => {
  expect(() => {
    Validator.validateAmount(amount);
  }).toThrow(error);
});

// 유효한 금액 테스트
test.each(['1000', '5000', '10000', '50000', '100000'])(
  '[유효한 금액 검사] "%s" 입력 시 예외가 발생하지 않는다',
  (amount) => {
    expect(() => {
      Validator.validateAmount(amount);
    }).not.toThrow();
  },
);

// 유효하지 않은 입력 테스트
test.each([
  { value: '', regex: REGEX.NUMBER_REGEX, errorMessage: ERROR_MESSAGES.EMPTY_INPUT },
  { value: 'abc', regex: REGEX.NUMBER_REGEX, errorMessage: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
  { value: '123a', regex: REGEX.NUMBER_REGEX, errorMessage: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
  {
    value: '1,2,a',
    regex: REGEX.NUMBER_AND_COMMA_REGEX,
    errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBER_INPUT,
  },
])(
  '[유효하지 않은 입력 검사] "$value" 입력 시 예외가 발생한다: $errorMessage',
  ({ value, regex, errorMessage }) => {
    expect(() => Validator.validateInput(value, regex, errorMessage)).toThrow(errorMessage);
  },
);

// 유효한 입력 테스트
test.each([
  { value: '123', regex: REGEX.NUMBER_REGEX },
  { value: '1,2,3', regex: REGEX.NUMBER_AND_COMMA_REGEX },
])('[유효한 입력 검사] "$value"시 예외가 발생하지 않는다', ({ value, regex }) => {
  expect(() => Validator.validateInput(value, regex, null)).not.toThrow();
});
