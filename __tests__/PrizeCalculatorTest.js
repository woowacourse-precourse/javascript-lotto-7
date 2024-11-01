import PrizeCalculator from '../src/PrizeCalculator';

describe('PrizeCalculator 클래스 테스트', () => {
  test.each([
    [
      {
        winningTable: new Map([
          [3, 2],
          [4, 3],
        ]),
        payment: 5000,
      },
      3100,
    ],
    [
      {
        winningTable: new Map([[3, 1]]),
        payment: 8000,
      },
      62.5,
    ],
  ])('수익률을 계산하는지 테스트', (inputs, expected) => {
    const { winningTable, payment } = inputs;
    const prizeCalculator = new PrizeCalculator(winningTable, payment);

    expect(prizeCalculator.getProfit()).toBe(expected);
  });
});
