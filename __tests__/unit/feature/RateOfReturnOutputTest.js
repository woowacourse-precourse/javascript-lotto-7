import { Console } from '@woowacourse/mission-utils';
import LottoController from '../../../src/components/LottoController.js';
import Input from '../../../src/utils/io/Input.js';

describe('수익률 출력 테스트', () => {
  beforeAll(() => {
    Input.promptRetry = jest.fn();
  });

  test('로또 구매 금액 : 1000원, 5,000원 당첨 1개, 수익률 500.0% 출력', () => {
    const mockWinningResult = { 3: 1, 4: 0, 5: 0, '5B': 0, 6: 0 };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = '총 수익률은 500.0%입니다.';
    const mockPurchaseAmount = 1000;

    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);

    const lottoController = new LottoController();

    lottoController.setPurchaseAmount(mockPurchaseAmount);
    lottoController.displayHandler.printRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(logSpy).toHaveBeenCalledWith(logs);
  });

  test('로또 구매 금액 : 1000원, 50,000원 당첨 1개, 수익률 5000.0% 출력', () => {
    const mockWinningResult = { 3: 0, 4: 1, 5: 0, '5B': 0, 6: 0 };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = '총 수익률은 5000.0%입니다.';
    const mockPurchaseAmount = 1000;

    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);

    const lottoController = new LottoController();

    lottoController.setPurchaseAmount();
    lottoController.displayHandler.printRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(logSpy).toHaveBeenCalledWith(logs);
  });

  test('로또 구매 금액 : 1000원, 1,500,000원 당첨 1개, 수익률 150000.0% 출력', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 1, '5B': 0, 6: 0 };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = '총 수익률은 150000.0%입니다.';
    const mockPurchaseAmount = 1000;

    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);

    const lottoController = new LottoController();

    lottoController.setPurchaseAmount();
    lottoController.displayHandler.printRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(logSpy).toHaveBeenCalledWith(logs);
  });

  test('로또 구매 금액 : 30,000,000원, 30,000,000원 당첨 1개, 수익률 100.0% 출력', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 0, '5B': 1, 6: 0 };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = '총 수익률은 100.0%입니다.';
    const mockPurchaseAmount = 30000000;

    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);

    const lottoController = new LottoController();
    lottoController.setPurchaseAmount();
    lottoController.displayHandler.printRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(logSpy).toHaveBeenCalledWith(logs);
  });

  test('로또 구매 금액 : 1000원, 2,000,000,000원 당첨 1개, 수익률 200000000.0% 출력', () => {
    const mockWinningResult = { 3: 0, 4: 0, 5: 0, '5B': 0, 6: 1 };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = '총 수익률은 200000000.0%입니다.';
    const mockPurchaseAmount = 1000;

    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);

    const lottoController = new LottoController();

    lottoController.setPurchaseAmount();
    lottoController.displayHandler.printRateOfReturn(
      mockWinningResult,
      mockPurchaseAmount,
    );

    expect(logSpy).toHaveBeenCalledWith(logs);
  });
});
