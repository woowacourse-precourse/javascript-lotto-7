import ReturnRateCalculatorService from '../../src/Service/ReturnRateCalculatorService';

describe('ReturnRateCalculatorService 테스트', () => {
  test('총 수익률을 계산한다.', () => {
    const purchaseAmount = 8000;
    const totalWinningRank = [0, 0, 0, 0, 1];
    const output = 62.5;

    const returnRateCalculatorService = new ReturnRateCalculatorService();
    const totalReturnRate =
      returnRateCalculatorService.calculateTotalReturnRate(
        purchaseAmount,
        totalWinningRank
      );

    expect(totalReturnRate).toBe(output);
  });
});
