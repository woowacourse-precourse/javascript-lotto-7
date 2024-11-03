import Validator from '../utils/Validator.js';
import ERROR_MESSAGES from '../consts/ErrorMessage.js';

describe('Validator.validateBonusNumber', () => {
  test('보너스 번호가 1에서 45 사이가 아니면 에러를 발생시킨다', () => {
    expect(() =>
      Validator.validateBonusNumber('0', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    expect(() =>
      Validator.validateBonusNumber('46', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
  });

  test('보너스 번호가 숫자가 아니면 에러를 발생시킨다', () => {
    expect(() =>
      Validator.validateBonusNumber('abc', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    expect(() =>
      Validator.validateBonusNumber('!@#', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
  });

  test('보너스 번호가 당첨 번호와 중복되면 에러를 발생시킨다', () => {
    expect(() =>
      Validator.validateBonusNumber('3', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    expect(() =>
      Validator.validateBonusNumber('6', [1, 2, 3, 4, 5, 6]),
    ).toThrow(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
  });

  test('보너스 번호가 유효하고 당첨 번호와 중복되지 않으면 에러가 발생하지 않는다', () => {
    expect(() =>
      Validator.validateBonusNumber('7', [1, 2, 3, 4, 5, 6]),
    ).not.toThrow();
    expect(() =>
      Validator.validateBonusNumber('45', [1, 2, 3, 4, 5, 6]),
    ).not.toThrow();
  });
});
