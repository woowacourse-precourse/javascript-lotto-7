import validateAmount from '../src/validations/purchase-amount.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

const {
  INVALID_EMPTY_INPUT,
  INVALID_PURCHASE_AMOUNT_NOT_NUMBER,
  INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT,
} = ERROR_MESSAGES;

describe('로또 구입 금액 입력 테스트', () => {
  test.each([1000, 8000, 14000])(
    '올바른 금액 %i을 입력시 기능 테스트',
    (amount) => {
      const result = validateAmount(amount);
      expect(result).toBe(amount);
    },
  );

  test.each([
    { input: '', expectedError: INVALID_EMPTY_INPUT },
    { input: '100j', expectedError: INVALID_PURCHASE_AMOUNT_NOT_NUMBER },
    { input: 'a', expectedError: INVALID_PURCHASE_AMOUNT_NOT_NUMBER },
    { input: '@#!', expectedError: INVALID_PURCHASE_AMOUNT_NOT_NUMBER },
    { input: '4500', expectedError: INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT },
    { input: '400', expectedError: INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT },
  ])(
    '잘못된 입력 값 %s을 입력시 상응하는 에러 메시지 %s 발생',
    ({ input, expectedError }) => {
      expect(() => validateAmount(input)).toThrow(expectedError);
    },
  );
});
