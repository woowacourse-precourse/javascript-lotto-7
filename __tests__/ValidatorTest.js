import Validator from '../src/utils/Validator.js';

describe('로또 입력값 검증', () => {
  describe('구입 금액 검증', () => {
    test('숫자가 아닌 문자가 포함된 금액을 입력하면 예외가 발생한다', () => {
      // Given
      const invalidAmount = '1000a';

      // When & Then
      expect(() => {
        Validator.cashValidation(invalidAmount);
      }).toThrow('[ERROR] 숫자 형식이 아닙니다.');
    });

    test('0원이나 음수를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidAmount = '0';

      // When & Then
      expect(() => {
        Validator.cashValidation(invalidAmount);
      }).toThrow('[ERROR] 양수를 입력해주세요.');
    });

    test('1000원 단위가 아닌 금액을 입력하면 예외가 발생한다', () => {
      // Given
      const invalidAmount = '1500';

      // When & Then
      expect(() => {
        Validator.cashValidation(invalidAmount);
      }).toThrow('[ERROR] 1000원 단위로 입력해주세요.');
    });

    test('1000원 단위의 올바른 금액을 입력하면 예외가 발생하지 않는다', () => {
      // Given
      const validAmount = '3000';

      // When & Then
      expect(() => {
        Validator.cashValidation(validAmount);
      }).not.toThrow();
    });
  });

  describe('당첨 번호 검증', () => {
    test('쉼표로 구분되지 않은 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidNumbers = '1 2 3 4 5 6';

      // When & Then
      expect(() => {
        Validator.targetLottoValidation(invalidNumbers);
      }).toThrow('[ERROR] 쉼표(,)로 구분된 숫자를 입력해 주세요.');
    });

    test('6개가 아닌 개수의 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidNumbers = '1,2,3,4,5';

      // When & Then
      expect(() => {
        Validator.targetLottoValidation(invalidNumbers);
      }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
    });

    test('중복된 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidNumbers = '1,2,3,4,5,5';

      // When & Then
      expect(() => {
        Validator.targetLottoValidation(invalidNumbers);
      }).toThrow('[ERROR] 로또 번호는 중복될 수 없습니다.');
    });

    test('1부터 45 사이가 아닌 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidNumbers = '0,1,2,3,4,5';

      // When & Then
      expect(() => {
        Validator.targetLottoValidation(invalidNumbers);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  });

  describe('보너스 번호 검증', () => {
    test('숫자가 아닌 보너스 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidBonus = 'a';
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      // When & Then
      expect(() => {
        Validator.bonusNumberValidation(invalidBonus, winningNumbers);
      }).toThrow('[ERROR] 숫자 형식이 아닙니다.');
    });

    test('당첨 번호와 중복된 보너스 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const duplicateBonus = '1';
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      // When & Then
      expect(() => {
        Validator.bonusNumberValidation(duplicateBonus, winningNumbers);
      }).toThrow('[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.');
    });

    test('범위를 벗어난 보너스 번호를 입력하면 예외가 발생한다', () => {
      // Given
      const invalidBonus = '46';
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      // When & Then
      expect(() => {
        Validator.bonusNumberValidation(invalidBonus, winningNumbers);
      }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  });
});
