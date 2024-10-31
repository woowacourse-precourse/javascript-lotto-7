import Lotto from '../src/Lotto';
import Analyzer from '../src/Analyzer';

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
    const winningTable = analyzer.getWinningTable();

    WINNING_STATISTICS.forEach(([key, value]) => {
      expect(winningTable.get(key)).toBe(value);
    });
  });
});
