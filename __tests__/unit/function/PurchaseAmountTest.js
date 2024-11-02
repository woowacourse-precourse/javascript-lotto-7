import { Console } from '@woowacourse/mission-utils';
import test from 'node:test';

describe('구입 금액 입력 기능 테스트', () => {
  let lottoController;

  beforeEach(() => {
    lottoController = new LottoController();
    jest.restoreAllMocks();
  });

  test('구입 금액 5000원을 입력받아 저장한다.', async () => {
    const mockPurchaseAmount = '5000';
    Console.readLineAsync = jest.fn().mockResolvedValue(mockPurchaseAmount);
    const logspy = jest.spyOn(Console, 'print');

    await lottoController.promptPurchaseAmount;

    expect(logspy).toHaveBeenCalledWith('구입 금액을 입력해주세요.\n');
    expect(lottoController.purchaseAmount).toBe(5000);
  });
});
