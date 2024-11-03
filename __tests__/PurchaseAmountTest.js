import ERROR_MESSAGES from '../src/constants/errorMessages.js';
import PurchaseAmountValidator from '../src/validators/PurchaseAmountValidator.js';

describe('로또 구입 금액 입력 유효성 검사 테스트', () => {
  const testCases = [
    {
      description: '로또 구입 금액이 1,000원 단위로 입력된 경우 통과한다.',
      input: 1000,
      expectedError: undefined,
    },
    {
      description: '로또 구입 금액이 1,000원 이상, 100,000원 이하일 경우 통과한다.',
      input: 50000,
      expectedError: undefined,
    },
    {
      description: '1,000원 단위로 나누어떨어지지 않는 금액 입력 시  예외가 발생한다.',
      input: 1100,
      expectedError: ERROR_MESSAGES.purchase_amount_unit(1000),
    },
    {
      description: '1,000원 미만의 금액 입력 시 예외가 발생한다.',
      input: 500,
      expectedError: ERROR_MESSAGES.purchase_amount_min(1000),
    },
    {
      description: '100,000원을 초과하는 금액 입력 시 예외가 발생한다.',
      input: 101000,
      expectedError: ERROR_MESSAGES.purchase_amount_max(100000),
    },
    {
      description: '숫자가 아닌 문자 입력 시 예외가 발생한다.',
      input: 'abc',
      expectedError: ERROR_MESSAGES.purchase_amount_not_number,
    },
  ];

  test.each(testCases)('$description', ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => PurchaseAmountValidator.validate(input)).toThrow(expectedError);
    } else {
      expect(() => PurchaseAmountValidator.validate(input)).not.toThrow();
    }
  });
});
