import Validator from '../../src/utils/Validator';
import { ERROR_MESSAGES } from '../../src/constants/messages';

describe('구매 금액 유효성 테스트', () => {
  test.each([
    { amount: '', error: ERROR_MESSAGES.EMPTY_INPUT },
    { amount: '0', error: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
    { amount: '101000', error: ERROR_MESSAGES.INVALID_AMOUNT_RANGE },
    { amount: '2500', error: ERROR_MESSAGES.INVALID_AMOUNT_UNIT },
    { amount: '-1000', error: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
    { amount: 'abc', error: ERROR_MESSAGES.INVALID_AMOUNT_INPUT },
  ])('유효하지 않은 금액 "$amount" 입력 시 예외가 발생한다 : $error', ({ amount, error }) => {
    expect(() => {
      Validator.validateAmount(amount);
    }).toThrow(error);
  });
});
