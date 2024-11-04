import { WinningNumbersValidator } from '../src/Controller/winningNumbersValidator.js';

describe('로또 당첨 번호 유효성 클래스 테스트', () => {
  test('빈값으로 입력한 경우 예외가 발생한다.', () => {
    const input = '';
    expect(() => {
      new WinningNumbersValidator().validateWinningNumbers(input);
    }).toThrow('[ERROR]');
  });

  describe('숫자 6개를 입력하지 않은 경우 예외 발생', () => {
    test('숫자 1개만 입력한 경우 예외가 발생한다.', () => {
      const input = '1';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자 2개만 입력한 경우 예외가 발생한다.', () => {
      const input = '1, 2';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자 3개만 입력한 경우 예외가 발생한다.', () => {
      const input = '1, 2, 3,';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자 4개만 입력한 경우 예외가 발생한다.', () => {
      const input = '1, 2, 3, 4';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자 5개만 입력한 경우 예외가 발생한다.', () => {
      const input = '1, 2, 3, 4, 5';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });
  });

  describe('숫자가 1에서 45까지가 아닐 경우 예외 발생', () => {
    test('숫자가 1에서 45까지의 범위 내에 들지 않은 경우 예외가 발생한다.', () => {
      const input = '1, 3, 4, 5, 46, 7';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자가 1에서 45까지의 범위 내에 들지 않은 경우 예외가 발생한다.', () => {
      const input = '1, 2, 3, 4, 5, 100';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자가 1에서 45까지의 범위 내에 들지 않은 경우 예외가 발생한다.', () => {
      const input = '1, 5, 10, 15, 50, 507';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('숫자가 1에서 45까지의 범위 내에 들지 않은 경우 예외가 발생한다.', () => {
      const input = '1, 5, 10, 15, 50, 1000';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });
  });

  describe('6개 숫자 모두 컴마로 구분하지 않은 경우 예외 발생', () => {
    test('모두 컴마로 구분하지 않은 경우 예외가 발생한다.', () => {
      const input = '1. 2. 3. 4. 5. 6';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('1개만 컴마로 구분하지 않은 경우 예외가 발생한다.', () => {
      const input = '1. 2, 3, 4, 5, 6';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });

    test('다른 문자표로 모두 구분한 경우 예외가 발생한다.', () => {
      const input = '1/2/3/4/5/6';
      expect(() => {
        new WinningNumbersValidator().validateWinningNumbers(input);
      }).toThrow('[ERROR]');
    });
  });

  test('숫자가 중복되는 경우 예외가 발생한다.', () => {
    const input = '1, 1, 2, 3, 4, 5';
    expect(() => {
      new WinningNumbersValidator().validateWinningNumbers(input);
    }).toThrow('[ERROR]');
  });
});
