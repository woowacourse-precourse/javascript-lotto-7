import Lotto from '../src/models/Lotto.js';

describe('로또 번호 유효성 검증', () => {
  test('로또 번호가 6개를 초과하면 예외가 발생한다', () => {
    // Given
    const invalidNumbers = [1, 2, 3, 4, 5, 6, 7];

    // When & Then
    expect(() => {
      new Lotto(invalidNumbers);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다', () => {
    // Given
    const duplicateNumbers = [1, 2, 3, 4, 5, 5];

    // When & Then
    expect(() => {
      new Lotto(duplicateNumbers);
    }).toThrow('[ERROR] 로또 번호는 중복될 수 없습니다.');
  });

  test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다', () => {
    // Given
    const outOfRangeNumbers = [0, 1, 2, 3, 4, 5];

    // When & Then
    expect(() => {
      new Lotto(outOfRangeNumbers);
    }).toThrow('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  describe('로또 번호 정렬', () => {
    test('로또 번호를 오름차순으로 정렬하여 반환한다', () => {
      // Given
      const unsortedNumbers = [6, 3, 1, 4, 5, 2];
      const expectedSortedNumbers = [1, 2, 3, 4, 5, 6];

      // When
      const lotto = new Lotto(unsortedNumbers);

      // Then
      expect(lotto.getNumbers()).toEqual(expectedSortedNumbers);
    });

    test('이미 정렬된 로또 번호도 동일하게 반환한다', () => {
      // Given
      const sortedNumbers = [1, 2, 3, 4, 5, 6];

      // When
      const lotto = new Lotto(sortedNumbers);

      // Then
      expect(lotto.getNumbers()).toEqual(sortedNumbers);
    });
  });

  describe('로또 번호 객체의 불변성', () => {
    test('getNumbers로 받은 배열을 수정해도 원본 배열은 변경되지 않는다', () => {
      // Given
      const numbers = [1, 2, 3, 4, 5, 6];
      const lotto = new Lotto(numbers);

      // When
      const returnedNumbers = lotto.getNumbers();
      returnedNumbers.push(7);

      // Then
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
