import LotteryRetailer from '../src/LotteryRetailer';
import Lotto from '../src/Lotto.js';

import { LOTTO } from '../src/constants/index.js';

describe('LotteryRetailer 클래스 테스트', () => {
  let lotteryRetailer;

  beforeEach(() => {
    lotteryRetailer = new LotteryRetailer();
  });

  test('로또 번호 생성 기능 테스트', () => {
    const numbers = lotteryRetailer.pickLottoNumber();

    expect(numbers).toHaveLength(LOTTO.numberCount);
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(LOTTO.minNumber);
      expect(number).toBeLessThanOrEqual(LOTTO.maxNumber);
    });
  });

  test('로또 티켓 발권 테스트', () => {
    const purchasePrice = 8000;

    const tickets = lotteryRetailer.issueTicket(purchasePrice);

    expect(tickets).toHaveLength(8);
  });

  test('당첨 티켓 확인 기능 테스트', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 23, 25])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const expected = {
      fifth: 0,
      fourth: 1,
      third: 0,
      second: 0,
      first: 0,
    };

    const ticketCountForPrize = lotteryRetailer.evaluateTicketWinnings(
      tickets,
      winningNumbers,
      bonus
    );

    expect(ticketCountForPrize).toEqual(expected);
  });

  test('수익률 계산 기능 테스트', () => {
    const purchasePrice = 8000;
    const ticketCountForPrize = {
      fifth: 1,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    const lotteryYield = lotteryRetailer.evaluateLotteryYield(
      ticketCountForPrize,
      purchasePrice
    );

    expect(lotteryYield).toBe(62.5);
  });
});
