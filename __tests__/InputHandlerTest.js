import InputHandler from '../src/handlers/InputHandler.js';
import Lotto from '../src/models/Lotto.js';

describe('InputHandler 클래스 테스트', () => {
  let inputHandler;
  let mockInputView;
  let mockOutputView;
  let mockValidationLotto;

  beforeEach(() => {
    mockInputView = { promptUserInput: jest.fn() };
    mockOutputView = { displayErrorMessage: jest.fn() };
    mockValidationLotto = {
      purchasePrice: jest.fn(),
      winningNumbers: jest.fn(),
      bonusNumber: jest.fn(),
    };

    inputHandler = new InputHandler(
      mockInputView,
      mockOutputView,
      mockValidationLotto
    );
  });

  test('구입 금액을 입력하고 검증하는지 테스트', async () => {
    mockInputView.promptUserInput.mockResolvedValueOnce('5000');
    const result = await inputHandler.getPurchasePrice();

    expect(result).toBe(5000);
    expect(mockValidationLotto.purchasePrice).toHaveBeenCalledWith('5000');
  });

  test('올바른 형식의 당첨 번호 입력 시 Lotto 객체를 반환하는지 테스트', async () => {
    mockInputView.promptUserInput.mockResolvedValueOnce('1,2,3,4,5,6');
    const result = await inputHandler.getWinningLotto();

    expect(result).toBeInstanceOf(Lotto);
    expect(result.numbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mockValidationLotto.winningNumbers).toHaveBeenCalledWith(
      '1,2,3,4,5,6'
    );
  });

  test('보너스 번호를 입력하고 검증하는지 테스트', async () => {
    mockInputView.promptUserInput.mockResolvedValueOnce('7');
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = await inputHandler.getBonusNumber(winningLotto);

    expect(result).toBe(7);
    expect(mockValidationLotto.bonusNumber).toHaveBeenCalledWith(
      '7',
      winningLotto
    );
  });
});
