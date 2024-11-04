import { makeInputToPurchaseMoneyNumber } from '../../src/Utills/Check/PurchaseMoney.js';
import { ERROR_MESSAGE } from '../../src/View/Error.js';
import { emptyString } from '../../src/Utills/Check/emptyStr.js';
// 빈 문자열 체크를 위한 테스트
describe('makeInputToPurchaseMoneyNumber 함수 테스트', () => {
  test('입력이 비어있으면 NEED_INPUT 에러를 발생시킨다', () => {
    expect(() => makeInputToPurchaseMoneyNumber('')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.NEED_INPUT}`
    );
  });

  test('공백만 포함된 입력이 있을 경우 NEED_INPUT 에러를 발생시킨다', () => {
    expect(() => makeInputToPurchaseMoneyNumber('    ')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.NEED_INPUT}`
    );
  });

  test('금액이 0 이하일 경우 PURCHASE_MONEY_ERROR_MINIMUN 에러를 발생시킨다', () => {
    expect(() => makeInputToPurchaseMoneyNumber('0')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.PURCHASE_MONEY_ERROR_MINIMUN}`
    );
    expect(() => makeInputToPurchaseMoneyNumber('-1000')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.PURCHASE_MONEY_ERROR_MINIMUN}`
    );
  });

  test('천 단위로 나눠 떨어지지 않는 금액에 대해 PURCHASE_MONEY_ERROR_DEVIDE 에러를 발생시킨다', () => {
    expect(() => makeInputToPurchaseMoneyNumber('1001')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE}`
    );
    expect(() => makeInputToPurchaseMoneyNumber('500')).toThrow(
      `[ERROR] ${ERROR_MESSAGE.PURCHASE_MONEY_ERROR_DEVIDE}`
    );
  });

  test('정상적인 입력이 들어오면 금액을 반환한다', () => {
    const result = makeInputToPurchaseMoneyNumber('1000');
    expect(result).toBe(1000);
  });

  test('천 단위로 구분된 숫자를 입력하면 금액을 반환한다', () => {
    const result = makeInputToPurchaseMoneyNumber('1,000');
    expect(result).toBe(1000);
  });
});
