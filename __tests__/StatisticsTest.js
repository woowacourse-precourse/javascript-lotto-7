import { PROFITS } from '../src/constants/won';
import Lotto from '../src/Lotto.js';
import Statistics from '../src/model/Statistics.js';

describe('Statistics 클래스 테스트', () => {
  const winning = new Lotto([1, 2, 3, 4, 5, 6]);

  test('당첨 통계가 정확히 계산되는지 테스트', () => {
    const lottos = [
      new Lotto([1, 2, 3, 8, 9, 10]),
      new Lotto([1, 2, 3, 4, 9, 10]),
      new Lotto([1, 2, 3, 4, 5, 10]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 6]),
    ];
    const statistics = new Statistics(winning, lottos, 5000, 7);

    expect(statistics.getStatistics()).toEqual([1, 1, 1, 1, 1]);
  });

  test('수익률이 정확히 계산되는지 테스트', () => {
    const lottos = [
      new Lotto([1, 2, 3, 8, 9, 10]),
      new Lotto([1, 2, 3, 4, 9, 10]),
      new Lotto([1, 2, 3, 4, 5, 10]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 6]),
    ];
    const statistics = new Statistics(winning, lottos, 5000, 7);
    const totalProfit =
      PROFITS.THREE +
      PROFITS.FOUR +
      PROFITS.FIVE +
      PROFITS.FIVE_BONUS +
      PROFITS.SIX;
    const expectedProfit = Math.round((totalProfit / 5000) * 10000) / 100;

    expect(statistics.getProfit()).toEqual(expectedProfit);
  });

  test('당첨 번호와 일치하는 번호가 없는 경우 테스트', () => {
    const lottos = [
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];

    const statistics = new Statistics(winning, lottos, 2000, 7);

    expect(statistics.getStatistics()).toEqual([0, 0, 0, 0, 0]);
    expect(statistics.getProfit()).toBe(0);
  });
});
