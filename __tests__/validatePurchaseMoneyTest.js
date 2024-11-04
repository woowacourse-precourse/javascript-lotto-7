import { validatePurchaseMoney } from '../src/validators/validatePurchaseMoney.js';

describe('구입 금액 검증 테스트 - [Error] 발생 상황', () => {
  test('숫자가 아닌 값을 입력하면 에러가 발생합니다.', () => {
    expect(() => validatePurchaseMoney(NaN)).toThrow(
      '[ERROR] 구입금액에 숫자가 아닌 값이 입력되었습니다.',
    );
  });

  test('정수가 아닐 때 에러가 발생합니다.', () => {
    expect(() => validatePurchaseMoney(1000.5)).toThrow(
      '[ERROR] 구입 금액은 정수로 입력해야 합니다.',
    );
  });

  test('안전한 정수 범위를 벗어난 숫자를 입력하면 에러가 발생합니다.', () => {
    expect(() => validatePurchaseMoney(9007199254741000)).toThrow(
      '[ERROR] 너무 큰 금액은 입력할 수 없습니다.',
    );
  });

  test('1,000원 미만일 때 에러가 발생합니다.', () => {
    expect(() => validatePurchaseMoney(500)).toThrow(
      '[ERROR] 최소 구입 금액은 1,000원입니다.',
    );
  });

  test('1,000원 단위로 나누어 떨어지지 않을 때 에러가 발생합니다.', () => {
    expect(() => validatePurchaseMoney(1500)).toThrow(
      '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
    );
  });
});
