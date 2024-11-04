import LotteryService from '../src/Services/LotteryService.js';

jest.mock('../src/Notes.js');
jest.mock('../src/Factory/LotteryFactory.js');

describe('LotteryService', () => {
  const mockLotteryClass = jest.fn();
  const mockSettings = {};

  describe('calculateMatchCount', () => {
    const lotteryService = new LotteryService(mockLotteryClass, mockSettings);

    it('모든 숫자가 일치하고 보너스 번호가 있는 경우', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      const result = lotteryService.calculateMatchCount(
        lottoNumbers,
        winningNumbers,
        bonusNumber,
      );
      expect(result).toEqual({ matchingNumberCount: 6, hasBonusNumber: false });
    });

    it('일치하는 숫자가 없고 보너스 번호도 포함되지 않은 경우', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [7, 8, 9, 10, 11, 12];
      const bonusNumber = 13;

      const result = lotteryService.calculateMatchCount(
        lottoNumbers,
        winningNumbers,
        bonusNumber,
      );
      expect(result).toEqual({ matchingNumberCount: 0, hasBonusNumber: false });
    });

    it('일치하는 숫자는 3개이고 보너스 번호가 포함된 경우', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [3, 4, 5, 7, 8, 9];
      const bonusNumber = 6;

      const result = lotteryService.calculateMatchCount(
        lottoNumbers,
        winningNumbers,
        bonusNumber,
      );
      expect(result).toEqual({ matchingNumberCount: 3, hasBonusNumber: true });
    });

    it('일치하는 숫자는 4개이지만 보너스 번호가 포함되지 않은 경우', () => {
      const lottoNumbers = [1, 2, 3, 4, 5, 6];
      const winningNumbers = [2, 3, 4, 5, 7, 8];
      const bonusNumber = 9;

      const result = lotteryService.calculateMatchCount(
        lottoNumbers,
        winningNumbers,
        bonusNumber,
      );
      expect(result).toEqual({ matchingNumberCount: 4, hasBonusNumber: false });
    });
  });
});
