import { Console } from '@woowacourse/mission-utils';
import PurchaseAmountGenerator from '../src/models/PurchaseAmountGenerator.js';
import { ERROR_MESSAGES, PURCHASE_ERRORS } from '../src/constants/constants.js';

describe('PurchaseAmountValidator 클래스 테스트', () => {
  beforeEach(() => {
    jest.spyOn(Console, 'print').mockImplementation(() => {});
    jest.spyOn(Console, 'readLineAsync').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('유효한 금액 입력 시 금액이 반환된다.', async () => {
    Console.readLineAsync.mockResolvedValueOnce('3000');
    const amount = await PurchaseAmountGenerator.getPurchaseAmount();
    expect(amount).toBe('3000');
  });

  test.each([
    ['', ERROR_MESSAGES.IS_EMPTY],
    ['abc', ERROR_MESSAGES.INVALID_INPUT],
    ['3000.5', ERROR_MESSAGES.INVALID_INPUT],
    ['-3000', ERROR_MESSAGES.INVALID_INPUT],
    ['1500', PURCHASE_ERRORS.NOT_DIVIDED_1000],
  ])(
    '입력값 "%s"에 대해 예외 "%s"가 발생하고 다시 입력을 받는다.',
    async (input, expectedError) => {
      Console.readLineAsync
        .mockResolvedValueOnce(input)
        .mockResolvedValueOnce('3000');
      const amount = await PurchaseAmountGenerator.getPurchaseAmount();

      expect(Console.print).toHaveBeenCalledWith(expectedError);
      expect(amount).toBe('3000');
    },
  );
});
