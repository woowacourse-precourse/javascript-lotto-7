import PrizeCalculator from '../src/PrizeCalculator';

describe('PrizeCalculator 클래스 테스트', () => {
  test.each([
    [
      {
        matchingTable: new Map([
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 2],
          [4, 3],
          [5, 0],
          [6, 0],
          ['bonus', 0],
        ]),
        payment: 5000,
      },
      3200,
    ],
    [
      {
        matchingTable: new Map([
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 1],
          [4, 0],
          [5, 0],
          [6, 0],
          ['bonus', 0],
        ]),
        payment: 8000,
      },
      62.5,
    ],
  ])('수익률을 계산하는지 테스트', (inputs, expected) => {
    const { matchingTable, payment } = inputs;
    const prizeCalculator = new PrizeCalculator(matchingTable, payment);

    expect(prizeCalculator.getProfit()).toBe(expected);
  });
});
