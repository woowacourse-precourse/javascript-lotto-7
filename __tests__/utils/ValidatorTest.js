import Validator from '../../src/utils/Validator';
import { ERROR_MESSAGES } from '../../src/constants/messages';

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
