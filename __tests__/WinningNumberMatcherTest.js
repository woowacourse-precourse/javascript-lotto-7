import { WinningNumberMatcher } from '../src/features';
import { MockLottoGenerator } from '../src/mock/MockLottoGenerator';

describe('WinningNumberMatcher 테스트', () => {
  const DEFAULT_BONUS = 7;

  const verifyMatchResultProperties = (matchResults) => {
    expect(matchResults).toEqual(
      expect.objectContaining({
        three: expect.any(Number),
        four: expect.any(Number),
        five: expect.any(Number),
        fiveBonus: expect.any(Number),
        six: expect.any(Number),
      }),
    );
  };

  const testCases = [
    {
      name: '여러 개의 당첨이 있는 경우',
      lottoNumbers: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 40, 41, 42],
      ],
      winningNumber: [1, 2, 3, 4, 5, 6],
      expected: { six: 2, three: 1 },
    },
    {
      name: '6개 당첨인 경우',
      lottoNumbers: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 6],
      expected: { six: 1 },
    },
    {
      name: '5개 당첨인 경우',
      lottoNumbers: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 40],
      expected: { five: 1 },
    },
    {
      name: '5개 + 보너스 당첨인 경우',
      lottoNumbers: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      expected: { fiveBonus: 1 },
    },
    {
      name: '4개 당첨인 경우',
      lottoNumbers: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 4, 40, 41],
      expected: { four: 1 },
    },
    {
      name: '3개 당첨인 경우',
      lottoNumbers: [[1, 2, 3, 4, 5, 6]],
      winningNumber: [1, 2, 3, 40, 41, 42],
      expected: { three: 1 },
    },
    {
      name: '당첨이 없는 경우',
      lottoNumbers: [[7, 8, 9, 10, 11, 12]],
      winningNumber: [1, 2, 3, 4, 5, 6],
      expected: { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 },
    },
  ];

  test.each(testCases)('$name', async ({ lottoNumbers, winningNumber, bonusNumber = DEFAULT_BONUS, expected }) => {
    // given
    const lottos = await MockLottoGenerator(lottoNumbers);
    // matchResult랑 verify를 beforeEach
    // when
    const matchResults = WinningNumberMatcher(lottos, winningNumber, bonusNumber);

    // then
    verifyMatchResultProperties(matchResults);
    Object.entries(expected).forEach(([key, value]) => {
      expect(matchResults[key]).toBe(value);
      // After로
      if (value !== 0) matchResults[key] = 0;
    });
  });
});
