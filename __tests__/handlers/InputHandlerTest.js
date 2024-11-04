import InputHandler from '../../src/handlers/InputHandler';

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
});
