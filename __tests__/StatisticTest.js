// - **5. 당첨 통계 계산**

import Statistic from '../src/Model/Statistic';

//   - 1~5등까지 횟수와 처음 투자금이 주어지면 당첨 통계 구성
//   - 총 상금을 합산해 수익률 계산

describe('Statistic 클래스 테스트', () => {
  const lottoStatistic = new Statistic(8000);
  lottoStatistic.addWinningCount('fifth');

  test('8,000원에 5등이 한 번 당첨됐다면, 수익률은 62.5입니다.', () => {
    expect(lottoStatistic.getEarningRate()).toBe('62.5');
  });
});
