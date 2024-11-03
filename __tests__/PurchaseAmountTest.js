// PurchaseAmountValidator.test.js
import { Console } from '@woowacourse/mission-utils';
import PurchaseAmountGenerator from '../src/getInput/PurchaseAmountGenerator.js';

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
    ['', '[ERROR] 빈 문자열입니다.'],
    ['abc', '[ERROR] 숫자로 변환되지 않습니다.'],
    ['3000.5', '[ERROR] 소수점이 포함되어 있습니다.'],
    ['-3000', '[ERROR] 양수가 아닙니다.'],
    ['1500', '[ERROR] 1000으로 나누어지지 않습니다.'],
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
