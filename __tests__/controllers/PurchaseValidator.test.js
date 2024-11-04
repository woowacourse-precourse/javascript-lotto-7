import PurchaseValidator from '../../src/controllers/PurchaseValidator.js';
import { mockQuestions, getLogSpy } from '../../__mocks__/mockUtils.js';
import { ERROR_MESSAGES } from '../../src/utils/constants.js';

describe.skip('PurchaseValidator 클래스 테스트', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('올바른 구입 금액을 입력했을 때 해당 값을 반환해야 한다.', async () => {
    mockQuestions(['14000']);

    const result = await PurchaseValidator.validatePurchaseAmount('14000');
    expect(result).toBe('14000');
    expect(logSpy).not.toHaveBeenCalled();
  });

  test('구입 금액이 숫자가 아닐 때 예외 메시지를 출력하고 다시 입력을 요청한다.', async () => {
    mockQuestions(['dk', '14000']);

    const result = await PurchaseValidator.validatePurchaseAmount('abc');
    expect(result).toBe('14000');
    expect(logSpy).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test('값을 입력할 때 화폐를 표기할 때 사용하는 ,는 허용한다.', async () => {
    mockQuestions(['12,00', '12,000']);

    const result = await PurchaseValidator.validatePurchaseAmount('12,00');
    expect(result).toBe('12,000');
    expect(logSpy).toHaveBeenCalledWith(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test('구입 금액이 0보다 작거나 같을 때 예외 메시지를 출력하고 다시 입력을 요청한다.', async () => {
    mockQuestions(['-1000', '14000']);

    const result = await PurchaseValidator.validatePurchaseAmount('-1000');
    expect(result).toBe('14000');
    expect(logSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE
    );
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않을 때 예외 메시지를 출력하고 다시 입력을 요청한다.', async () => {
    mockQuestions(['5500', '14000']);

    const result = await PurchaseValidator.validatePurchaseAmount('5500');
    expect(result).toBe('14000');
    expect(logSpy).toHaveBeenCalledWith(
      ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(1000)
    );
  });
});
