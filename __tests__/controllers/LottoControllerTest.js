import LottoController from '../../src/controllers/lottoController.js';
import LottoView from '../../src/views/lottoView.js';
import Validator from '../../src/utils/validator.js';
import retry from '../../src/utils/retry.js';

jest.mock('../../src/views/lottoView.js');
jest.mock('../../src/utils/validator.js');
jest.mock('../../src/utils/retry.js', () => jest.fn((fn) => fn()));

describe('LottoController 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('start() 메서드 - 로또 구매, 당첨 번호 및 보너스 번호 입력 및 결과 출력 흐름 테스트', async () => {
    LottoView.InputPurchaseAmount.mockResolvedValueOnce('8000');
    LottoView.InputWinningNumbers.mockResolvedValueOnce('1,2,3,4,5,6');
    LottoView.InputBonusNumber.mockResolvedValueOnce('7');

    LottoView.printCount = jest.fn();
    LottoView.PrintLottos = jest.fn();
    LottoView.PrintWinningStatistics = jest.fn();

    await LottoController.start();

    expect(LottoView.InputPurchaseAmount).toHaveBeenCalled();
    expect(Validator.validatePurchaseAmount).toHaveBeenCalledWith(8000);
    expect(LottoView.printCount).toHaveBeenCalledWith(expect.any(Number));

    expect(LottoView.PrintLottos).toHaveBeenCalled();

    expect(LottoView.InputWinningNumbers).toHaveBeenCalled();
    expect(Validator.validateLottoNumbers).toHaveBeenCalledWith([
      1, 2, 3, 4, 5, 6,
    ]);

    expect(LottoView.InputBonusNumber).toHaveBeenCalled();
    expect(Validator.validateBonusNumber).toHaveBeenCalledWith(
      7,
      [1, 2, 3, 4, 5, 6],
    );

    expect(LottoView.PrintWinningStatistics).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Number),
    );
  });

  test('getPurchaseAmount() 메서드 - 올바른 구매 금액 입력', async () => {
    LottoView.InputPurchaseAmount.mockResolvedValueOnce('8000');

    const purchaseAmount = await LottoController.getPurchaseAmount();

    expect(Validator.validatePurchaseAmount).toHaveBeenCalledWith(8000);
    expect(purchaseAmount).toBe(8000);
  });

  test('getWinningNumbers() 메서드 - 올바른 당첨 번호 입력', async () => {
    LottoView.InputWinningNumbers.mockResolvedValueOnce('1,2,3,4,5,6');

    const winningNumbers = await LottoController.getWinningNumbers();

    expect(Validator.validateLottoNumbers).toHaveBeenCalledWith([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('getBonusNumber() 메서드 - 올바른 보너스 번호 입력', async () => {
    LottoView.InputBonusNumber.mockResolvedValueOnce('7');

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = await LottoController.getBonusNumber(winningNumbers);

    expect(Validator.validateBonusNumber).toHaveBeenCalledWith(
      7,
      winningNumbers,
    );
    expect(bonusNumber).toBe(7);
  });
});
