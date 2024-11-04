import { Console } from '@woowacourse/mission-utils';
import { jest } from '@jest/globals';
import InputHandler from '../src/InputHandler.js';

describe('InputHandler 클래스 테스트', () => {
  const mockConsoleReadLineAsync = jest.spyOn(Console, 'readLineAsync').mockImplementation();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('purchase price 옳은 input', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('8000');
    const purchasePrice = await InputHandler.getPurchasePrice();
    expect(purchasePrice).toBe('8000');
  });


  test('should get and validate winning numbers correctly', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');
    const winNumbers = await InputHandler.getWinNumbers();
    expect(winNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should throw error for invalid winning numbers', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('1,2,3,4,5,50');
    await expect(InputHandler.getWinNumbers()).rejects.toThrow('[ERROR] 1부터 45까지의 숫자만 입력해주세요.');
  });

  test('should get bonus number correctly', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('7');
    const bonusNumber = await InputHandler.getBonusNumber();
    expect(bonusNumber).toBe('7');
  });

});
