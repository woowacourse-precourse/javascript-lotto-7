import ValidateBonusNumber from '../src/models/ValidateBonusNumber.js';

describe('보너스 번호 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new ValidateBonusNumber();
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateIsNumber('a');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1-45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateBonusNumberRange(46);
    }).toThrow('[ERROR]');

    expect(() => {
      validator.validateBonusNumberRange(0);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateDuplicateWithWinningNumbers(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('정상적인 보너스 번호는 검증을 통과한다.', () => {
    expect(() => {
      validator.validateBonusNumber('7', [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
