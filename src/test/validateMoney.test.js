import Validator from '../utils/Validator.js';

describe('Validator.validateMoney', () => {
  test('1000원 단위의 양의 정수일 경우 에러가 발생하지 않는다', () => {
    expect(() => Validator.validateMoney('1000')).not.toThrow();
    expect(() => Validator.validateMoney('5000')).not.toThrow();
    expect(() => Validator.validateMoney('10000')).not.toThrow();
  });

  test('0을 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('0')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
  });

  test('1000원 단위가 아닌 숫자를 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('1500')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
    expect(() => Validator.validateMoney('2500')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
  });

  test('음수를 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('-1000')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
  });

  test('숫자가 아닌 입력값을 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('abc')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
    expect(() => Validator.validateMoney('!@#')).toThrow(
      '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
    );
  });
});
