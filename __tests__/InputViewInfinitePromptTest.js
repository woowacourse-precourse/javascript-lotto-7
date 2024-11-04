import { Console } from '@woowacourse/mission-utils';
import {
  inputBonusNumber,
  inputPurchaseAmount,
  inputWinningNumbers,
} from '../src/utils/io/InputView.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('InputView 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('구매 금액에 올바른 금액 입력 시 반환', async () => {
    Console.readLineAsync.mockResolvedValueOnce('1000');
    const result = await inputPurchaseAmount();
    expect(result).toBe(1000);
  });

  test('구매 금액에 잘못된 금액 입력 시 다시 입력 요청', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('-1000')
      .mockResolvedValueOnce('0')
      .mockResolvedValueOnce('1000');

    const result = await inputPurchaseAmount();
    expect(result).toBe(1000);
    expect(Console.print).toHaveBeenCalledTimes(2);
  });

  test('당첨 번호에 올바른 번호 입력 시 반환', async () => {
    Console.readLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');
    const result = await inputWinningNumbers();
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('당첨 번호에 잘못된 번호 입력 시 다시 입력 요청', async () => {
    Console.readLineAsync
      .mockResolvedValueOnce('0,1,2')
      .mockResolvedValueOnce('1,2,3,46')
      .mockResolvedValueOnce('1,2,3,4,5,6');

    const result = await inputWinningNumbers();
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Console.print).toHaveBeenCalledTimes(2);
  });

  test('보너스 번호에 올바른 번호 입력 시 반환', async () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    Console.readLineAsync.mockResolvedValueOnce('7');
    const result = await inputBonusNumber(winningNumbers);
    expect(result).toEqual([7]);
  });

  test('보너스 번호에 잘못된 번호 입력 시 다시 입력 요청', async () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    Console.readLineAsync
      .mockResolvedValueOnce('1')
      .mockResolvedValueOnce('0')
      .mockResolvedValueOnce('7');

    const result = await inputBonusNumber(winningNumbers);
    expect(result).toEqual([7]);
    expect(Console.print).toHaveBeenCalledTimes(2);
  });
});
