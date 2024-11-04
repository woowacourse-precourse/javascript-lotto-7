import Game from '../../src/Controller/Game';
import PurchaseController from '../../src/Controller/PurchaseController';
import WinningNumberController from '../../src/Controller/WinningNumberController';
import ResultController from '../../src/Controller/ResultController';

jest.mock('../../src/Controller/PurchaseController');
jest.mock('../../src/Controller/WinningNumberController');
jest.mock('../../src/Controller/ResultController');

describe('Game 클래스 테스트', () => {
  let game;

  beforeEach(() => {
    jest.clearAllMocks();
    game = new Game();
  });

  test('게임은 필요한 모든 컨트롤러들을 가지고 있어야 한다', () => {
    expect(game.purchaseController).toBeInstanceOf(PurchaseController);
    expect(game.winningNumberController).toBeInstanceOf(
      WinningNumberController
    );
    expect(game.resultController).toBeInstanceOf(ResultController);
  });

  test('게임이 완료되면 결과가 올바르게 계산되어야 한다', async () => {
    const mockGameData = {
      lottos: [[1, 2, 3, 4, 5, 6]],
      purchaseAmount: '1000',
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: '7',
    };

    game.purchaseController.handlePurchase.mockResolvedValue({
      lottos: mockGameData.lottos,
      purchaseAmount: mockGameData.purchaseAmount,
    });
    game.winningNumberController.getWinningNumbers.mockResolvedValue(
      mockGameData.winningNumbers
    );
    game.winningNumberController.getBonusNumber.mockResolvedValue(
      mockGameData.bonusNumber
    );

    await game.process();

    expect(game.resultController.processResults).toHaveBeenCalledWith(
      mockGameData.lottos,
      mockGameData.winningNumbers,
      mockGameData.bonusNumber,
      mockGameData.purchaseAmount
    );
  });
});
