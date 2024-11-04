import { WINNING_KEYS } from '../src/constants/lotto.js';
import Lotto from '../src/Lotto.js';
import OutputProcessor from '../src/OutputProcessor.js';
import Statistics from '../src/Statistics.js';

jest.mock('../src/OutputProcessor.js', () => ({
  printStatistics: jest.fn()
}));

describe('Statistics 클래스 테스트', () => {
  const lottos = [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([1, 2, 3, 4, 5, 7]),
    new Lotto([1, 2, 3, 8, 9, 10]),
    new Lotto([1, 2, 3, 11, 12, 13]),
    new Lotto([1, 2, 3, 4, 8, 9])
  ];

  const winningNumbers = ['1', '2', '3', '4', '5', '6'];
  const bonusNumber = '7';
  const purchasePrice = 5000;

  test('result 메서드가 예상된 통계 출력을 수행하는지 확인', () => {
    const statistics = new Statistics(lottos, purchasePrice, winningNumbers, bonusNumber);

    const expectedWinningCounts = {
      [WINNING_KEYS.FIRST]: 1,
      [WINNING_KEYS.SECOND]: 1,
      [WINNING_KEYS.THIRD]: 0,
      [WINNING_KEYS.FOURTH]: 1,
      [WINNING_KEYS.FIFTH]: 2
    };

    const expectedEarningsRate = '4601200.0';

    statistics.result();

    expect(OutputProcessor.printStatistics).toHaveBeenCalledWith(expectedWinningCounts, expectedEarningsRate);
  });
});
