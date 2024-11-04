import Lotto from '../src/Lotto.js';
import Analyzer from '../src/Analyzer.js';

describe('Analyzer 클래스 테스트', () => {
  test('당첨 번호와 일치하는 번호의 수를 계산하는지 테스트', () => {
    const NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [2, 4, 6, 8, 10, 12],
      [1, 4, 23, 25, 28, 41],
    ];
    const WINNING_NUMBERS = {
      numbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };
    const WINNING_STATISTICS = [
      [2, 1],
      [3, 1],
      [6, 1],
    ];

    const lottos = NUMBERS.map((numbers) => new Lotto(numbers));
    const analyzer = new Analyzer(lottos, WINNING_NUMBERS);
    const winningTable = analyzer.getMatchingTable();

    WINNING_STATISTICS.forEach(([key, value]) => {
      expect(winningTable.get(key)).toBe(value);
    });
  });

  test.each([
    [
      [
        [1, 2, 3, 4, 5, 7],
        [2, 3, 4, 5, 6, 7],
        [1, 3, 4, 5, 6, 7],
        [1, 2, 3, 5, 6, 7],
      ],
      4,
    ],
    [
      [
        [1, 2, 3, 4, 5, 7],
        [2, 3, 4, 5, 6, 8],
      ],
      1,
    ],
    [
      [
        [3, 4, 8, 9, 10, 11],
        [2, 3, 4, 5, 6, 8],
      ],
      0,
    ],
  ])('보너스 당첨을 분류하는지 테스트', (lottoNumbers, expected) => {
    const WINNING_NUMBERS = {
      numbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    };
    const WINNING_BONUS_TAG = 'bonus';

    const lottos = lottoNumbers.map((numbers) => new Lotto(numbers));
    const analyzer = new Analyzer(lottos, WINNING_NUMBERS);
    const winningTable = analyzer.getMatchingTable();

    expect(winningTable.get(WINNING_BONUS_TAG)).toBe(expected);
  });
});
