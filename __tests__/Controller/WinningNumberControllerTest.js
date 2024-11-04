import { GAME_MESSAGE } from '../../src/constants/gameMessage';
import WinningNumberController from '../../src/Controller/WinningNumberController';
import User from '../../src/User/User';

jest.mock('../../src/User/User');

let mockUser;
let winningNumberController;
describe('당첨 번호 & 보너스 번호 입력 흐름 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUser = new User();
    winningNumberController = new WinningNumberController(mockUser);
  });

  describe('당첨 번호 입력 흐름 테스트', () => {
    test('당첨 번호가 올바른 형식으로 입력된다', async () => {
      mockUser.readUserInput.mockResolvedValue('1, 2, 3, 4, 5, 6');

      const winningNumbers =
        await winningNumberController.processWinningNumbers();

      expect(mockUser.readUserInput).toHaveBeenCalledWith(
        GAME_MESSAGE.WINNING_NUMBER
      );
      expect(winningNumbers.length).toBe(6);
    });

    test('입력된 당첨 번호가 올바르게 파싱된다', async () => {
      mockUser.readUserInput.mockResolvedValue('1,2,3,4,5,6');
      const result = await winningNumberController.processWinningNumbers();

      expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('보너스 번호 입력 흐름 테스트', () => {
    test('보너스 번호가 올바른 형식으로 입력된다', async () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      mockUser.readUserInput.mockResolvedValue('7');
      const bonusNumber = await winningNumberController.processBonusNumber(
        winningNumbers
      );

      expect(mockUser.readUserInput).toHaveBeenCalledWith(
        GAME_MESSAGE.BONUS_NUMBER
      );
      expect(bonusNumber).toBe('7');
    });
  });

  describe('잘못 입력 시 재입력 여부', () => {
    test('당첨 번호를 잘못 입력 시 재입력 할 수 있다', async () => {
      mockUser.readUserInput
        .mockResolvedValueOnce('a,b,c,d,e,f') //문자열로 잘못 입력
        .mockResolvedValueOnce('1,2,3,4,5,6'); //다시 재입력

      const winningNumbers = await winningNumberController.getWinningNumbers();

      expect(mockUser.readUserInput).toHaveBeenCalledTimes(2);
      expect(winningNumbers.length).toBe(6);
    });

    test('보너스 번호를 잘못 입력 시 재입력 할 수 있다', async () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      mockUser.readUserInput
        .mockResolvedValueOnce('a')
        .mockResolvedValueOnce('7');

      const bonusNumber = await winningNumberController.getBonusNumber(
        winningNumbers
      );

      expect(mockUser.readUserInput).toHaveBeenCalledTimes(2);
      expect(bonusNumber).toBe('7');
    });
  });
});
