import { ERRORS } from '../src/constants/errors.js';
import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('로또 번호 유효성 검사', () => {
    test.each([
      {
        case: '6개를 초과하는 경우',
        numbers: [1, 2, 3, 4, 5, 6, 7],
        expectedError: '[ERROR] 로또 번호는 6개여야 합니다.',
      },
      {
        case: '6개 미만인 경우',
        numbers: [1, 2, 3, 4, 5],
        expectedError: '[ERROR] 로또 번호는 6개여야 합니다.',
      },
      {
        case: '중복된 번호가 있는 경우',
        numbers: [1, 2, 3, 4, 5, 5],
        expectedError: ERRORS.INVALID_DUPLICATE_LOTTO_NUMBER,
      },
    ])('$case', ({ numbers, expectedError }) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(expectedError);
    });
  });

  describe('로또 번호 반환', () => {
    test('로또 번호는 오름차순으로 정렬되어 반환된다', () => {
      const lotto = new Lotto([6, 3, 1, 4, 5, 2]);
      const lottoNumbers = lotto.getSortedLottoNumbers();

      expect(lottoNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('로또 번호는 정렬된 새로운 배열을 반환한다', () => {
      const numbers = [6, 3, 1, 4, 5, 2];
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getSortedLottoNumbers();

      expect(numbers).toEqual([6, 3, 1, 4, 5, 2]);
      expect(lottoNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('로또 번호 범위 검사', () => {
    test.each([
      {
        case: '1보다 작은 숫자가 있는 경우',
        numbers: [0, 2, 3, 4, 5, 6],
        expectedError: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
      },
      {
        case: '45보다 큰 숫자가 있는 경우',
        numbers: [1, 2, 3, 4, 5, 46],
        expectedError: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
      },
    ])('$case', ({ numbers, expectedError }) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(expectedError);
    });
  });
});
