import { makeInputToPurchaseMoneyNumber } from '../../src/Utills/Check/PurchaseMoney.js';
import { ERROR_MESSAGE } from '../../src/View/Error.js';

// 빈 문자열 체크를 위한 테스트
describe('makeInputToPurchaseMoneyNumber 함수 테스트', () => {
  test.each([
    ['', ERROR_MESSAGE.NEED_INPUT],
    ['    ', ERROR_MESSAGE.NEED_INPUT],
  ])('입력이 "%s"일 경우, %s 에러를 발생시킨다', (input, expectedError) => {
    expect(() => makeInputToPurchaseMoneyNumber(input)).toThrow(
      `[ERROR] ${expectedError}`
    );
  });

  test.each([
    ['0', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_MINIMUN],
    ['-1000', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_MINIMUN],
  ])('금액이 %s일 경우, %s 에러를 발생시킨다', (input, expectedError) => {
    expect(() => makeInputToPurchaseMoneyNumber(input)).toThrow(
      `[ERROR] ${expectedError}`
    );
  });

  test.each([
    ['1001', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE],
    ['500', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE],
    ['1.2000', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE],
  ])('금액이 %s일 경우, %s 에러를 발생시킨다', (input, expectedError) => {
    expect(() => makeInputToPurchaseMoneyNumber(input)).toThrow(
      `[ERROR] ${expectedError}`
    );
  });

  test.each([
    ['1000', 1000],
    ['1,000', 1000],
  ])('입력이 %s일 경우, %i를 반환한다', (input, expectedValue) => {
    const result = makeInputToPurchaseMoneyNumber(input);
    expect(result).toBe(expectedValue);
  });
});
