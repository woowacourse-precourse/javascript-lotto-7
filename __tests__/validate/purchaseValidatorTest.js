import { validateLottoPurchase } from '../../src/validate/purchaseValidator.js';
import { PURCHASE_ERROR_MESSAGE } from '../../src/constants/errorMessage.js';

describe('구매 금액 유효성 검증', () => {
  test.each([
    ['빈 문자열', '', PURCHASE_ERROR_MESSAGE.NO_INPUT],
    ['공백 문자열', '   ', PURCHASE_ERROR_MESSAGE.NO_INPUT],
  ])('빈 값 입력 시 에러가 발생해야 한다 - %s', (_, input, expectedError) => {
    expect(() => validateLottoPurchase(input)).toThrow(expectedError);
  });

  test.each([
    ['문자열', 'abc', PURCHASE_ERROR_MESSAGE.NOT_NUMBER],
    ['숫자+문자', '1000원', PURCHASE_ERROR_MESSAGE.NOT_NUMBER],
  ])(
    '숫자가 아닌 입력 시 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateLottoPurchase(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['1500원', '1500', PURCHASE_ERROR_MESSAGE.NOT_THOUSAND_UNIT],
    ['999원', '999', PURCHASE_ERROR_MESSAGE.NOT_THOUSAND_UNIT],
  ])(
    '1000원 단위가 아닌 금액 입력 시 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateLottoPurchase(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['0원', '0', PURCHASE_ERROR_MESSAGE.LESS_THAN_ZERO],
    ['음수', '-1000', PURCHASE_ERROR_MESSAGE.LESS_THAN_ZERO],
  ])(
    '0원 이하 입력 시 에러가 발생해야 한다 - %s',
    (_, input, expectedError) => {
      expect(() => validateLottoPurchase(input)).toThrow(expectedError);
    }
  );

  test.each([
    ['1000원', '1000'],
    ['2000원', '2000'],
  ])('올바른 금액 입력 시 에러가 발생하지 않아야 한다 - %s', (_, input) => {
    expect(() => validateLottoPurchase(input)).not.toThrow();
  });
});
