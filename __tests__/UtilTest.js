import {
  getProfit,
  getProfitRate,
  countLotto,
  getRank,
} from '../src/utils/index.js';

describe('수익, 수익률 계산 테스트', () => {
  test('당첨 순위 결과에 따라 올바른 상금을 계산하는지 확인한다.', () => {
    const result = {
      1: 0,
      2: 1,
      3: 3,
      4: 2,
      5: 1,
      0: 7,
    };
    expect(getProfit(result)).toBe(34605000);
  });

  test('구입한 금액과 얻는 수익에 따라 올바른 수익률을 계산하는지 확인한다.', () => {
    expect(getProfitRate(5000, 10000)).toBe('50.0');
    expect(getProfitRate(2000, 5000)).toBe('40.0');
    expect(getProfitRate(15000, 100000)).toBe('15.0');
    expect(getProfitRate(0, 0)).toBe('NaN');
  });

  test('구입금액에 맞는 로또 갯수를 발행하는지 확인한다.', () => {
    expect(countLotto(8000)).toBe(8);
    expect(countLotto(10000)).toBe(10);
  });

  test('당첨된 숫자 갯수와 보너스 숫자의 당첨 여부가 주어질 때 올바른 등수를 반환하는지 확인한다.', () => {
    expect(getRank(6, 0)).toBe(1);
    expect(getRank(5, 1)).toBe(2);
    expect(getRank(5, 0)).toBe(3);
    expect(getRank(4, 0)).toBe(4);
    expect(getRank(4, 1)).toBe(4);
    expect(getRank(3, 0)).toBe(5);
    expect(getRank(3, 1)).toBe(5);
    expect(getRank(0, 0)).toBe(0);
    expect(getRank(0, 1)).toBe(0);
  });
});
