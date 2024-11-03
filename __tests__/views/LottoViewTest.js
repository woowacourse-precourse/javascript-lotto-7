import LottoView from '../../src/views/lottoView.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../../src/constants/inputMessage.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('LottoView 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('InputPurchaseAmount() 테스트', async () => {
    const mockInput = '8000';
    Console.readLineAsync.mockResolvedValueOnce(mockInput);
    const result = await LottoView.InputPurchaseAmount();
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.purchaseAmountPrompt,
    );
    expect(result).toBe(mockInput);
  });

  test('printCount() 테스트', () => {
    const count = 8;
    LottoView.printCount(count);
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.purchaseMessage(count),
    );
  });

  test('PrintLottos() 테스트', () => {
    const lottos = [
      { getNumber: () => [8, 21, 23, 41, 42, 43] },
      { getNumber: () => [3, 5, 11, 16, 32, 38] },
    ];
    LottoView.PrintLottos(lottos);
    lottos.forEach((lotto) => {
      expect(Console.print).toHaveBeenCalledWith(
        `[${lotto.getNumber().join(', ')}]`,
      );
    });
  });

  test('InputWinningNumbers() 테스트', async () => {
    const mockInput = '1,2,3,4,5,6';
    Console.readLineAsync.mockResolvedValueOnce(mockInput);
    const result = await LottoView.InputWinningNumbers();
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.winningNumbersPrompt,
    );
    expect(result).toBe(mockInput);
  });

  test('InputBonusNumber() 테스트', async () => {
    const mockInput = '7';
    Console.readLineAsync.mockResolvedValueOnce(mockInput);
    const result = await LottoView.InputBonusNumber();
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.bonusNumberPrompt,
    );
    expect(result).toBe(mockInput);
  });

  test('PrintWinningStatistics() 테스트', () => {
    const rankCounts = {
      3: 1,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
    const profitRate = 62.5;
    LottoView.PrintWinningStatistics(rankCounts, profitRate);
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.winningTotalMessage,
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.match3Message(rankCounts[3]),
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.match4Message(rankCounts[4]),
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.match5Message(rankCounts[5]),
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.match5WithBonusMessage(rankCounts[5.5]),
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.match6Message(rankCounts[6]),
    );
    expect(Console.print).toHaveBeenCalledWith(
      INPUT_MESSAGE.totalProfitMessage(profitRate),
    );
  });
});
