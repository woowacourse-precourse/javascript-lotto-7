import Validator from '../utils/Validator.js';
import ERROR_MESSAGES from '../consts/ErrorMessage.js';

describe('Validator.validateMoney', () => {
  test('1000원 단위의 양의 정수일 경우 에러가 발생하지 않는다', () => {
    expect(() => Validator.validateMoney('1000')).not.toThrow();
    expect(() => Validator.validateMoney('5000')).not.toThrow();
    expect(() => Validator.validateMoney('10000')).not.toThrow();
  });

  test('0을 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('0')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
  });

  test('1000원 단위가 아닌 숫자를 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('1500')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
    expect(() => Validator.validateMoney('2500')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
  });

  test('음수를 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('-1000')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
  });

  test('숫자가 아닌 입력값을 입력하면 에러를 발생시킨다', () => {
    expect(() => Validator.validateMoney('abc')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
    expect(() => Validator.validateMoney('!@#')).toThrow(
      ERROR_MESSAGES.MONEY_INVALID,
    );
  });
});
