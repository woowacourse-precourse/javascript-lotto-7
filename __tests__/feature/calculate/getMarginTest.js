import { getMarginRate, getMarginSum } from "../../../src/feature/calculate/getMargin";

describe('총 당첨액 계산 기능 테스트', () => {
  test('당첨 내역으로 총 당첨액 반환', () => {
    // given
    const winningStats = [
      ['3개 일치', { count : 1, winningAmount: 5000 }],
      ['4개 일치', { count : 1, winningAmount: 50000 }],
      ['5개 일치', { count : 1, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 1, winningAmount: 30000000 }],
      ['6개 일치', { count : 1, winningAmount: 2000000000 }],
    ];

    const winningResult = new Map(winningStats);
    const expectedResult = 5000 + 50000 + 1500000 + 30000000 + 2000000000;

    // when
    const marginSum = getMarginSum(winningResult);

    // then
    expect(marginSum).toBe(expectedResult);
  });

  test.each([
    [5000, 1000, '500.0'],
    [50000, 1000, '5000.0'],
    [1500000, 1000, '150000.0'],
    [30000000, 1000, '3000000.0'],
    [2000000000, 1000, '200000000.0']
  ])('당첨액: %d, 구매액: %d, 수익률: %s', (margin, purchase, result) => {
    // given
    const lottoMargin = margin;
    
    // when
    const marginRate = getMarginRate(lottoMargin, purchase);

    // then
    expect(marginRate).toBe(result);
  })
})