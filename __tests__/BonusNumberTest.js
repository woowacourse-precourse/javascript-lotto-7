import bonusNumber from '../src/Models/BonusNumber.js';
import BONUS_NUMBER_RULES from '../src/Validators/bonusNumberRules.js';
import DEFAULT_RULES from '../src/Validators/defaultRules.js';

describe('보너스 클래스 테스트', () => {
  test('입력이 공백이면 예외가 발생한다.', () => {
    expect(() => {
      new bonusNumber('  ');
    }).toThrow('[ERROR]' + DEFAULT_RULES.notEmpty.errorMessage);
  });

  test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new bonusNumber('1299f');
    }).toThrow('[ERROR]' + BONUS_NUMBER_RULES.notNumber.errorMessage);
  });

  test('보너스 번호가 소수이면 예외가 발생한다.', () => {
    expect(() => {
      new bonusNumber('42.53');
    }).toThrow('[ERROR]' + BONUS_NUMBER_RULES.notInteger.errorMessage);
  });

  test('보너스 번호가 1~45 사이의 수가 아니면 예외가 발생한다. (더 높을때)', () => {
    expect(() => {
      new bonusNumber('64');
    }).toThrow('[ERROR]' + BONUS_NUMBER_RULES.validRange.errorMessage);
  });

  test('보너스 번호가 1~45 사이의 수가 아니면 예외가 발생한다. (더 낮을때))', () => {
    expect(() => {
      new bonusNumber('-64');
    }).toThrow('[ERROR]' + BONUS_NUMBER_RULES.validRange.errorMessage);
  });

  test('로또 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new bonusNumber('4', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]' + BONUS_NUMBER_RULES.duplicate.errorMessage);
  });

  test('보너스 번호 반환 메서드 실행', () => {
    const bonus = new bonusNumber('7', [1, 2, 3, 4, 5, 6]);
    expect(bonus.number).toBe(7);
  });
});
