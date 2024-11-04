
import LottoInput from '../src/LottoInput';
import { Console } from '@woowacourse/mission-utils';
import { validatePurchaseAmount, validateWinningNumbers } from '../src/error';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

jest.mock('../src/error', () => ({
  validatePurchaseAmount: jest.fn(),
  validateWinningNumbers: jest.fn(),
}));

describe('LottoInput 모듈 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  describe('getPurchaseAmount 테스트', () => {
    test('유효한 금액을 입력했을 때 올바른 금액 반환', async () => {
      Console.readLineAsync.mockResolvedValueOnce('5000');
      validatePurchaseAmount.mockImplementation((amount) => {});

      const amount = await LottoInput.getPurchaseAmount();
      expect(amount).toBe(5000);
      expect(validatePurchaseAmount).toHaveBeenCalledWith(5000);
    });

    test('유효하지 않은 금액 입력 시 예외 발생', async () => {
      Console.readLineAsync.mockResolvedValueOnce('abc');
      validatePurchaseAmount.mockImplementation(() => {
        throw new Error("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
      });

      await expect(LottoInput.getPurchaseAmount()).rejects.toThrow("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
    });
  });

  describe('getWinningNumbers 테스트', () => {
    test('유효한 당첨 번호와 보너스 번호 입력 시 올바른 번호 반환', async () => {
      Console.readLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');
      Console.readLineAsync.mockResolvedValueOnce('7');
      validateWinningNumbers.mockImplementation((winningNumbers, bonusNumber) => {});

      const { winningNumbers, bonusNumber } = await LottoInput.getWinningNumbers();
      expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
      expect(bonusNumber).toBe(7);
      expect(validateWinningNumbers).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6], 7);
    });

    test('유효하지 않은 당첨 번호 입력 시 예외 발생', async () => {
      Console.readLineAsync.mockResolvedValueOnce('1,2,3,4,5'); // 6개가 아님
      Console.readLineAsync.mockResolvedValueOnce('7');
      validateWinningNumbers.mockImplementation(() => {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      });

      await expect(LottoInput.getWinningNumbers()).rejects.toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    test('보너스 번호가 당첨 번호와 중복될 경우 예외 발생', async () => {
      Console.readLineAsync.mockResolvedValueOnce('1,2,3,4,5,6');
      Console.readLineAsync.mockResolvedValueOnce('6'); 
      validateWinningNumbers.mockImplementation(() => {
        throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
      });

      await expect(LottoInput.getWinningNumbers()).rejects.toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    });
  });
});
