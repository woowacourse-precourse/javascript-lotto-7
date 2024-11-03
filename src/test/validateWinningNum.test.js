import Validator from '../utils/Validator.js';
import ERROR_MESSAGES from '../consts/ErrorMessage.js';

describe('Validator.validateLotto', () => {
  test('로또 번호가 6개가 아니면 에러를 발생시킨다', () => {
    expect(() => Validator.validateLotto([1, 2, 3, 4, 5])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_LENGTH,
    );
    expect(() => Validator.validateLotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_LENGTH,
    );
  });

  test('로또 번호에 중복된 숫자가 있으면 에러를 발생시킨다', () => {
    expect(() => Validator.validateLotto([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE,
    );
    expect(() => Validator.validateLotto([10, 20, 30, 30, 40, 41])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_DUPLICATE,
    );
  });

  test('로또 번호가 1에서 45 범위를 벗어나면 에러를 발생시킨다', () => {
    expect(() => Validator.validateLotto([0, 2, 3, 4, 5, 6])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_RANGE,
    );
    expect(() => Validator.validateLotto([1, 2, 3, 4, 5, 46])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_RANGE,
    );
  });

  test('로또 번호에 숫자가 아닌 값이 포함되면 에러를 발생시킨다', () => {
    expect(() => Validator.validateLotto([1, 2, 3, NaN, 5, 6])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_RANGE,
    );
    expect(() => Validator.validateLotto([1, 2, 3, 'a', 5, 6])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_RANGE,
    );
    expect(() => Validator.validateLotto([1, 2, 3, '@', 5, 6])).toThrow(
      ERROR_MESSAGES.WINNING_NUMBERS_RANGE,
    );
  });

  test('유효한 6개의 번호가 입력되면 에러가 발생하지 않는다', () => {
    expect(() => Validator.validateLotto([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() =>
      Validator.validateLotto([10, 20, 30, 40, 41, 42]),
    ).not.toThrow();
  });
});
