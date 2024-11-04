import BonusNumber from '../src/validation/BonusNumber.js';
import ERROR from '../src/constants/ErrorMessage.js';

describe('보너스 숫자 입력값 테스트', () => {
  test('보너스 숫자를 입력하지 않거나 공백이라면 예외가 발생한다.', () => {
    expect(() => BonusNumber.validate('')).toThrow(
      `${ERROR.PREFIX + ERROR.EMPTY}`,
    );
    expect(() => BonusNumber.validate(' ')).toThrow(
      `${ERROR.PREFIX + ERROR.EMPTY}`,
    );
  });

  test('보너스 숫자에 대한 입력값이 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => BonusNumber.validate('hi')).toThrow(
      `${ERROR.PREFIX + ERROR.IS_NAN}`,
    );
  });

  test('보너스 숫자가 1에서 45사이의 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => BonusNumber.validate('80')).toThrow(
      `${ERROR.PREFIX + ERROR.RANGE}`,
    );
    expect(() => BonusNumber.validate('0')).toThrow(
      `${ERROR.PREFIX + ERROR.RANGE}`,
    );
  });

  test('보너스 숫자가 당첨 숫자와 중복된다면 예외가 발생한다.', () => {
    const bonus = '6';
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(() => BonusNumber.validate(bonus, winningNumbers)).toThrow(
      `${ERROR.PREFIX + ERROR.BONUS_DUPLICATE}`,
    );
  });
});
