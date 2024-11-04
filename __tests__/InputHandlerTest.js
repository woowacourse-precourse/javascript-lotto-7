import { Console } from '@woowacourse/mission-utils';
import { jest } from '@jest/globals';
import InputHandler from '../src/InputHandler.js';

describe('InputHandler 클래스 테스트', () => {
  const mockConsoleReadLineAsync = jest.spyOn(Console, 'readLineAsync').mockImplementation();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('purchase price가 옳은 input일 때', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('8000');
    const purchasePrice = await InputHandler.getPurchasePrice();
    expect(purchasePrice).toBe('8000');
  });


  test('당첨 번호 매칭 로직 검증', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');
    const winNumbers = await InputHandler.getWinNumbers();
    expect(winNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });


  test('보너스 번호 매칭 로직 검증', async () => {
    mockConsoleReadLineAsync.mockResolvedValueOnce('7');
    const bonusNumber = await InputHandler.getBonusNumber();
    expect(bonusNumber).toBe('7');
  });

});
