import Lotto from '../src/models/Lotto.js';
import WinningStatics from '../src/models/WinningStatics.js';

describe('당첨 통계 클래스 테스트', () => {
  let winningNumbers;
  let bonusNumber;
  let winningStatics;

  beforeEach(() => {
    winningNumbers = [1, 2, 3, 4, 5, 6];
    bonusNumber = 7;
    winningStatics = new WinningStatics(winningNumbers, bonusNumber);
  });

  test('countMatchingNumbers 메서드는 당첨 번호와 일치하는 번호 개수를 계산한다.', () => {
    const testLottoNumbers = [1, 2, 3, 10, 20, 30];

    expect(winningStatics.countMatchingNumbers(testLottoNumbers)).toBe(3);
  });

  test('getRank 메서드는 일치하는 당첨 번호와 보너스 번호 여부에따라 등수를 계산한다.', () => {
    expect(winningStatics.getRank(6, false)).toBe(1);
    expect(winningStatics.getRank(5, true)).toBe(2);
    expect(winningStatics.getRank(5, false)).toBe(3);
    expect(winningStatics.getRank(4, false)).toBe(4);
    expect(winningStatics.getRank(3, false)).toBe(5);
  });

  test('getPrizeMoney 메서드는 각 등수에 따른 당첨금을 반환한다.', () => {
    expect(winningStatics.getPrizeMoney(6, false)).toBe(2000000000);
    expect(winningStatics.getPrizeMoney(5, true)).toBe(30000000);
    expect(winningStatics.getPrizeMoney(5, false)).toBe(1500000);
    expect(winningStatics.getPrizeMoney(4, false)).toBe(50000);
    expect(winningStatics.getPrizeMoney(3, false)).toBe(5000);
    expect(winningStatics.getPrizeMoney(2, false)).toBe(0);
  });

  test('updateRankStatics 메서드는 특정 등수의 당첨 횟수를 업데이트한다.', () => {
    winningStatics.updateRankStatics(6, false);
    winningStatics.updateRankStatics(5, true);

    expect(winningStatics.getRankStatics()).toEqual({ 1: 1, 2: 1, 3: 0, 4: 0, 5: 0 });
  });

  test('updateStatics 메서드는 여러 로또에 대한 당첨 통계를 업데이트한다.', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 1등
      new Lotto([1, 2, 3, 4, 5, 7]), // 2등
      new Lotto([1, 2, 3, 4, 5, 8]), // 3등
      new Lotto([1, 2, 3, 4, 10, 20]), // 4등
      new Lotto([1, 2, 3, 10, 20, 30]), // 5등
    ];
    winningStatics.updateStatics(lottos);

    expect(winningStatics.getRankStatics()).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });

  test('getRankStatics 메서드는 당첨 통계를 반환한다.', () => {
    winningStatics.updateRankStatics(6, false);
    winningStatics.updateRankStatics(5, true);
    winningStatics.updateRankStatics(5, false);
    const rankStatics = winningStatics.getRankStatics();

    expect(rankStatics).toEqual({ 1: 1, 2: 1, 3: 1, 4: 0, 5: 0 });
  });

  test('calculateRateOfReturn 메서드는 수익률을 계산하여 반환한다.', () => {
    const lottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([10, 20, 30, 40, 41, 42])];
    winningStatics.updateStatics(lottos);
    const rateOfReturn = winningStatics.calculateRateOfReturn(2);

    expect(rateOfReturn).toBe(100000000);
  });
});
