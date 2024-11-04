import Lotto from '../src/Lotto.js';

const testCases = {
  getLottoForPrint: [
    { numbers: [8, 21, 23, 41, 42, 43], expected: '8, 21, 23, 41, 42, 43' },
    { numbers: [1, 3, 5, 14, 22, 45], expected: '1, 3, 5, 14, 22, 45' },
    { numbers: [10, 12, 30, 35, 44, 45], expected: '10, 12, 30, 35, 44, 45' },
  ],
  hasInNumbers: [
    { numbers: [1, 2, 3, 4, 5, 6], input: 3, expected: true },
    { numbers: [1, 2, 3, 4, 5, 6], input: 7, expected: false },
  ],
  countMatchingNumbers: [
    { numbers1: [1, 2, 3, 4, 5, 6], numbers2: [4, 5, 6, 7, 8, 9], expected: 3 },
    {
      numbers1: [1, 2, 3, 4, 5, 6],
      numbers2: [10, 11, 12, 13, 14, 15],
      expected: 0,
    },
  ],
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each(testCases.getLottoForPrint)(
    'getLottoForPrint 메서드는 로또 번호를 올바르게 출력 형식으로 반환한다.',
    ({ numbers, expected }) => {
      const lotto = new Lotto(numbers);
      expect(lotto.getLottoForPrint()).toBe(expected);
    },
  );

  test.each(testCases.hasInNumbers)(
    'hasInNumbers 메서드는 특정 숫자가 로또 번호에 포함되었는지 확인한다.',
    ({ numbers, input, expected }) => {
      const lotto = new Lotto(numbers);
      expect(lotto.hasInNumbers(input)).toBe(expected);
    },
  );

  test.each(testCases.countMatchingNumbers)(
    'countMatchingNumbers 메서드는 다른 로또와 일치하는 번호의 개수를 반환한다.',
    ({ numbers1, numbers2, expected }) => {
      const lotto1 = new Lotto(numbers1);
      const lotto2 = new Lotto(numbers2);
      expect(lotto1.countMatchingNumbers(lotto2)).toBe(expected);
    },
  );
});
