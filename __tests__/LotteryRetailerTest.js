import LotteryRetailer from '../src/LotteryRetailer';

import { LOTTO } from '../src/constants/index.js';

jest.mock('../src/Lotto', () => {
  return jest.fn().mockImplementation(() => {
    return { isMock: true };
  });
});

describe('LotteryRetailer 클래스 테스트', () => {
  test('로또 구입 테스트', () => {
    const price = '8000';

    const lotteryRetailer = new LotteryRetailer();
    const tickets = lotteryRetailer.issueTicket(price);

    expect(tickets).toHaveLength(8);
  });

  test('로또 번호 생성 기능', () => {
    const numbers = LotteryRetailer.pickLottoNumber();

    expect(numbers).toHaveLength(LOTTO.numberCount);
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(LOTTO.minNumber);
      expect(number).toBeLessThanOrEqual(LOTTO.maxNumber);
    });
  });
});
