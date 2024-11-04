import LottoController from '../../../src/components/LottoController.js';
import Input from '../../../src/utils/io/Input.js';

describe('수익률 일치 테스트', () => {
  beforeAll(() => {
    Input.promptRetry = jest.fn();
  });

  test('로또 구매 금액 : 1000원, 5,000원 당첨 1개, 수익률 500.0%', () => {
    const mockWinningResult = { 3: 1, 4: 0, 5: 0, '5B': 0, 6: 0 };
    const mockPurchaseAmount = '1000';
    const mockRateOfReturn = '500.0';

    const lottoController = new LottoController();
    const rateOfReturn = lottoController.displayHandler.getRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(rateOfReturn).toBe(mockRateOfReturn);
  });

  test('로또 구매 금액 : 1000원, 50,000원 당첨 1개, 수익률 5000.0%', () => {
    const mockWinningResult = { 3: 0, 4: 1, 5: 0, '5B': 0, 6: 0 };
    const mockPurchaseAmount = '1000';
    const mockRateOfReturn = '5000.0';

    const lottoController = new LottoController();
    const rateOfReturn = lottoController.displayHandler.getRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(rateOfReturn).toBe(mockRateOfReturn);
  });

  test('로또 구매 금액 : 1000원, 1,500,000원 당첨 1개, 수익률 150000.0%', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 1, '5B': 0, 6: 0 };
    const mockPurchaseAmount = '1000';
    const mockRateOfReturn = '150000.0';

    const lottoController = new LottoController();
    const rateOfReturn = lottoController.displayHandler.getRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(rateOfReturn).toBe(mockRateOfReturn);
  });

  test('로또 구매 금액 : 30,000,000원, 30,000,000원 당첨 1개, 수익률 100.0%', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 0, '5B': 1, 6: 0 };
    const mockPurchaseAmount = '30000000';
    const mockRateOfReturn = '100.0';

    const lottoController = new LottoController();
    const rateOfReturn = lottoController.displayHandler.getRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(rateOfReturn).toBe(mockRateOfReturn);
  });

  test('로또 구매 금액 : 1000원, 2,000,000,000원 당첨 1개, 수익률 200000000.0%', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 1 };
    const mockPurchaseAmount = '1000';
    const mockRateOfReturn = '200000000.0';

    const lottoController = new LottoController();
    const rateOfReturn = lottoController.displayHandler.getRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(rateOfReturn).toBe(mockRateOfReturn);
  });
});
