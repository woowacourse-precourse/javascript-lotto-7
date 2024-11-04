import Statistics from '../src/Statistics';

describe('Statistics 클래스 테스트', () => {
  test.each([
    // 3000원 구매, 1등 하나 2등 하나
    [[0, 1, 1, 0, 0, 0], 3000, 67666666.67],
    // 4000원 구매, 2등 하나 3등 하나
    [[0, 0, 1, 1, 0, 0], 4000, 787500],
    //5000원 구매, 3등 하나 4등 하나
    [[0, 0, 0, 1, 1, 0], 5000, 31000],
  ])('수익률 계산 테스트', (gradeArray, purchaseAmount, expected) => {
    const statistics = new Statistics(gradeArray, purchaseAmount);
    expect(Number(statistics.getRateOfReturn().replace(/,/g, ''))).toBe(
      expected
    );
  });
});
