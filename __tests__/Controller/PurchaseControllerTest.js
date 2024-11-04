import { GAME_MESSAGE } from '../../src/constants/gameMessage';
import PurchaseController from '../../src/Controller/PurchaseController';
import LottoService from '../../src/Service/LottoService.js';
import User from '../../src/User/User';
import LottoResultView from '../../src/views/LottoResultView.js';

jest.mock('../../src/User/User');
jest.mock('../../src/Service/LottoService');
jest.mock('../../src/views/LottoResultView');

describe('PurchaseController 테스트', () => {
  let purchaseController;
  let mockUser;
  let mockLottoService;
  let mockResultView;

  beforeEach(() => {
    mockUser = new User();
    mockLottoService = new LottoService();
    mockResultView = new LottoResultView();
    purchaseController = new PurchaseController(
      mockUser,
      mockLottoService,
      mockResultView
    );
  });

  describe('로또 구매 흐름', () => {
    test('올바른 금액을 입력하면 로또가 발급된다', async () => {
      const purchaseAmount = '3000';
      const mockLottos = [
        [1, 2, 3, 4, 5, 6],
        [11, 12, 13, 14, 15, 16],
        [21, 22, 23, 24, 25, 26],
      ];
      mockUser.readUserInput.mockResolvedValue(purchaseAmount);
      mockLottoService.createLottos.mockReturnValue(mockLottos);

      const result = await purchaseController.processPurchase();
      console.log(result);

      expect(mockUser.readUserInput).toHaveBeenCalledWith(
        GAME_MESSAGE.PURCHASE
      );
      expect(mockLottoService.createLottos).toHaveBeenCalledWith(3);
      expect(mockResultView.printPurchaseResult).toHaveBeenCalledWith(
        3,
        mockLottos
      );
      expect(result).toStrictEqual({
        lottos: mockLottos,
        purchaseAmount: purchaseAmount,
      });
    });

    test('로또 갯수가 정확히 카운트 된다', () => {
      const purchaseAmount = '3000';
      const count = purchaseController.calculateLottoCount(purchaseAmount);
      expect(count).toBe(3);
    });
  });

  describe('잘못된 입력 시', () => {
    test('잘못된 입력 시 재시도 할 수 있다', async () => {
      mockUser.readUserInput
        .mockResolvedValueOnce('asdf') //잘못된 입력
        .mockResolvedValueOnce('1000'); //다시 올바른 입력

      mockLottoService.createLottos.mockReturnValue([[1, 2, 3, 4, 5, 6]]);
      const result = await purchaseController.handlePurchase();
      expect(mockUser.readUserInput).toHaveBeenCalledTimes(2);
      expect(result.lottos.length).toBe(1);
    });
  });
});
