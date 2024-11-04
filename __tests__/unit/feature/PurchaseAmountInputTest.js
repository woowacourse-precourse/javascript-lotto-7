import { Console } from '@woowacourse/mission-utils';
import LottoController from '../../../src/components/LottoController.js';

describe('구입 금액 입력 기능 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구입 금액 5000원을 입력받아 저장한다.', async () => {
    const mockPurchaseAmount = 5000;
    Console.readLineAsync = jest.fn().mockResolvedValue(mockPurchaseAmount);

    const lottoController = new LottoController();
    await lottoController.setPurchaseAmount();

    expect(lottoController.getPurchaseAmount()).toBe(5000);
  });
});
