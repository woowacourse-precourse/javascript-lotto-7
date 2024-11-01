import { addComma, getWinningResultText } from "../../../src/feature/parse/parseMap";

describe('로또 결과 문자열 변환 기능 테스트', () => {
  test('숫자 3자리 마다 , 추가', () => {
    // given
    const amountKeys = [5000, 50000, 1500000, 30000000, 2000000000];
    const expectedResult = ['(5,000원)', '(50,000원)', '(1,500,000원)', '(30,000,000원)', '(2,000,000,000원)'];
    // when
    const result = amountKeys.map(winAmount => addComma(winAmount));

    // then
    result.forEach((amountKeys, index) => {
      expect(amountKeys).toBe(expectedResult[index])
    });
  });

  test.each([
    [
      [
      ['3개 일치', { count : 20, winningAmount: 5000 }],
      ['4개 일치', { count : 1, winningAmount: 50000 }],
      ['5개 일치', { count : 3, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 90, winningAmount: 30000000 }],
      ['6개 일치', { count : 1, winningAmount: 2000000000 }],
      ], 
      `\n당첨 통계\n---\n3개 일치 (5,000원) - 20개\n4개 일치 (50,000원) - 1개\n5개 일치 (1,500,000원) - 3개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 90개\n6개 일치 (2,000,000,000원) - 1개`
    ],
    [
      [
      ['3개 일치', { count : 0, winningAmount: 5000 }],
      ['4개 일치', { count : 0, winningAmount: 50000 }],
      ['5개 일치', { count : 0, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 0, winningAmount: 30000000 }],
      ['6개 일치', { count : 1, winningAmount: 2000000000 }],
      ], 
      `\n당첨 통계\n---\n3개 일치 (5,000원) - 0개\n4개 일치 (50,000원) - 0개\n5개 일치 (1,500,000원) - 0개\n5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n6개 일치 (2,000,000,000원) - 1개`
    ],
  ])('당첨 결과로 문자열 생성 기능 테스트', (stats, result) => {
    // given
    const winningtStats = new Map(stats);

    // when
    const resultString = getWinningResultText(winningtStats);

    // then
    expect(resultString).toContain(result)
  });
})