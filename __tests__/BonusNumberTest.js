import { BonusNumberValidator } from '../src/Controller/bonusNumberValidator.js';

describe('보너스 번호 당첨 번호 유효성 클래스 테스트', () => {
  test('빈값으로 입력한 경우 입력한 경우 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new BonusNumberValidator().validateBonusNumber(input);
    }).toThrow('[ERROR]');
  });

  describe('보너스 번호 당첨 번호 유효성 클래스 테스트', () => {
    test('숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '#';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });

    test('숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '칠';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });

    test('숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '.';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 당첨 번호 유효성 클래스 테스트', () => {
    test('1부터 45까지의 숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '0';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });

    test('1부터 45까지의 숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '100';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });

    test('1부터 45까지의 숫자가 아닌 경우 예외가 발생한다.', () => {
      const input = '1000';
      expect(() => {
        new BonusNumberValidator().validateBonusNumber(input);
      }).toThrow('[ERROR]');
    });
  });
});
