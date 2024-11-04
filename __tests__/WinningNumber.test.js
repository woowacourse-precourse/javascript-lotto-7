import WinningNumber from '../src/WinningNumber.js';

describe('WinningNumber 클래스 테스트', () => {
  test('유효한 당첨 번호와 보너스 번호로 객체가 생성된다', () => {
    const winningNumber = new WinningNumber([1, 2, 3, 4, 5, 6], 7);

    expect(winningNumber.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningNumber.getBonusNumber()).toBe(7);
  });

  test('당첨 번호는 정렬된 상태로 반환된다', () => {
    const winningNumber = new WinningNumber([6, 5, 4, 3, 2, 1], 7);

    expect(winningNumber.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  describe('당첨 번호 유효성 검증', () => {
    test('당첨 번호가 6개가 아닐 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5], 7);
      }).toThrow('[ERROR]');
    });

    test('당첨 번호에 중복된 숫자가 있을 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 5], 7);
      }).toThrow('[ERROR]');
    });

    test('당첨 번호가 1보다 작은 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([0, 1, 2, 3, 4, 5], 7);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });

    test('당첨 번호가 45보다 큰 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 46], 7);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });

    test('당첨 번호가 숫자가 아닌 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber(['a', 'b', 'c', 'd', 'e', 'f'], 7);
      }).toThrow('[ERROR] 숫자만 입력 가능합니다.');
    });
  });

  describe('보너스 번호 유효성 검증', () => {
    test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], 6);
      }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    });

    test('보너스 번호가 1보다 작은 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], 0);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });

    test('보너스 번호가 45보다 큰 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], 46);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });

    test('보너스 번호가 숫자가 아닌 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], 'a');
      }).toThrow('[ERROR] 숫자만 입력 가능합니다.');
    });
  });

  describe('당첨 번호 비교 기능', () => {
    test('당첨 번호와 보너스 번호를 정상적으로 반환한다', () => {
      const winningNumber = new WinningNumber([1, 2, 3, 4, 5, 6], 7);
      const numbers = winningNumber.getWinningNumbers();
      const bonus = winningNumber.getBonusNumber();

      expect(numbers).toHaveLength(6);
      expect(numbers).toContain(1);
      expect(numbers).not.toContain(7);
      expect(bonus).toBe(7);
    });

    test('당첨 번호는 변경할 수 없도록 복사본이 반환된다', () => {
      const winningNumber = new WinningNumber([1, 2, 3, 4, 5, 6], 7);
      const numbers = winningNumber.getWinningNumbers();

      numbers.push(8);

      expect(winningNumber.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('입력값 형식 검증', () => {
    test('당첨 번호가 배열이 아닌 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber('123456', 7);
      }).toThrow('[ERROR]');
    });

    test('당첨 번호 배열에 undefined가 포함된 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, undefined], 7);
      }).toThrow('[ERROR]');
    });

    test('당첨 번호 배열에 null이 포함된 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, null], 7);
      }).toThrow('[ERROR]');
    });

    test('보너스 번호가 undefined인 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], undefined);
      }).toThrow('[ERROR]');
    });

    test('보너스 번호가 null인 경우 예외가 발생한다', () => {
      expect(() => {
        new WinningNumber([1, 2, 3, 4, 5, 6], null);
      }).toThrow('[ERROR]');
    });
  });
});
