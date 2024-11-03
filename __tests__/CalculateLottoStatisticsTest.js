import { calculateLottoStatistics } from '../src/utils/calculateLottoStatistics.js';

describe('로또 당첨 결과 테스트', () => {
  test('3개 번호 일치는 5등으로 분류된다', () => {
    const matchResults = [{ matchCount: 3, hasBonus: false }];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(1);
  });

  test('4개 번호 일치는 4등으로 분류된다', () => {
    const matchResults = [{ matchCount: 4, hasBonus: false }];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[4].count).toBe(1);
  });

  test('5개 번호 일치, 보너스 번호 불일치는 3등으로 분류된다', () => {
    const matchResults = [{ matchCount: 5, hasBonus: false }];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[5].count).toBe(1);
  });

  test('5개 번호 일치, 보너스 번호 일치는 2등으로 분류된다', () => {
    const matchResults = [{ matchCount: 5, hasBonus: true }];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics['5+bonus'].count).toBe(1);
  });

  test('6개 번호 일치는 1등으로 분류된다', () => {
    const matchResults = [{ matchCount: 6, hasBonus: false }];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[6].count).toBe(1);
  });

  test('2개 이하 번호 일치는 당첨되지 않는다', () => {
    const matchResults = [
      { matchCount: 2, hasBonus: false },
      { matchCount: 1, hasBonus: false },
      { matchCount: 0, hasBonus: false },
    ];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(0);
    expect(statistics[4].count).toBe(0);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(0);
    expect(statistics[6].count).toBe(0);
  });

  test('여러 개의 당첨을 올바르게 집계한다', () => {
    const matchResults = [
      { matchCount: 3, hasBonus: false },
      { matchCount: 3, hasBonus: false },
      { matchCount: 4, hasBonus: false },
      { matchCount: 5, hasBonus: true },
    ];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(2);
    expect(statistics[4].count).toBe(1);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(1);
    expect(statistics[6].count).toBe(0);
  });

  test('당첨 결과가 없으면 모든 당첨 횟수는 0이다', () => {
    const matchResults = [];

    const statistics = calculateLottoStatistics(matchResults);

    expect(statistics[3].count).toBe(0);
    expect(statistics[4].count).toBe(0);
    expect(statistics[5].count).toBe(0);
    expect(statistics['5+bonus'].count).toBe(0);
    expect(statistics[6].count).toBe(0);
  });
});
