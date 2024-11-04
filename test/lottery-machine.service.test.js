import LotteryMachineModel from '../src/lottery-machine/lottery-machine.model.js';
import LotteryMachineService from '../src/lottery-machine/lottery-machine.service.js';
import ValidationContext from '../src/validation/validation.context.js';

import { mockRandoms } from '../src/lib/testUtils.js';

describe('LotteryMachineService', () => {
  /** @type {LotteryMachineService} */
  let lotteryMachineService;

  beforeEach(() => {
    lotteryMachineService = new LotteryMachineService({
      models: { LotteryMachineModel: new LotteryMachineModel() },
      providers: { ValidationContext: new ValidationContext() },
    });
  });

  describe('generateLotteryTickets', () => {
    it(`주어진 금액에 따라 ${LotteryMachineService.STRATEGY.DIVISOR} 단위로 Lottery ticket을 발행해야한다`, () => {
      const purchaseAmount = '8000';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      const { lotteryTicketCounts, lotteryTickets } =
        lotteryMachineService.generateLotteryTickets();

      expect(lotteryTicketCounts).toBe(purchaseAmount / LotteryMachineService.STRATEGY.DIVISOR);
      expect(lotteryTickets.length).toBe(purchaseAmount / LotteryMachineService.STRATEGY.DIVISOR);
    });

    it(`발행된 Lottery ticket의 길이는 ${LotteryMachineService.STRATEGY.TICKET_LENGTH} 이어야만한다`, () => {
      const purchaseAmount = '8000';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      const { lotteryTickets } = lotteryMachineService.generateLotteryTickets();

      lotteryTickets.forEach((lotteryTicket) => {
        expect(lotteryTicket.length).toBe(LotteryMachineService.STRATEGY.TICKET_LENGTH);
      });
    });

    it(`발행된 Lottery ticket의 숫자는 ${LotteryMachineService.STRATEGY.TICKET_RANGE.START} ~ ${LotteryMachineService.STRATEGY.TICKET_RANGE.END} 사이의 숫자여야만한다`, () => {
      const purchaseAmount = '8000';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      const { lotteryTickets } = lotteryMachineService.generateLotteryTickets();

      const hasValidTicketRange = (lotteryTicket) => {
        lotteryTicket.forEach((ticketNumber) => {
          expect(ticketNumber).toBeGreaterThanOrEqual(
            LotteryMachineService.STRATEGY.TICKET_RANGE.START,
          );
          expect(ticketNumber).toBeLessThanOrEqual(LotteryMachineService.STRATEGY.TICKET_RANGE.END);
        });
      };

      lotteryTickets.forEach((lotteryTicket) => {
        hasValidTicketRange(lotteryTicket);
      });
    });

    it('발행된 Lottery ticket은 중복이 없는 숫자를 가져야만 한다', () => {
      const purchaseAmount = '8000';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      const { lotteryTickets } = lotteryMachineService.generateLotteryTickets();

      lotteryTickets.forEach((lotteryTicket) => {
        const hasDuplicatedNumber = new Set(lotteryTicket).size !== lotteryTicket.length;

        expect(hasDuplicatedNumber).toBe(false);
      });
    });
  });

  describe('generateWinningStatistics', () => {
    it('당첨 결과에 따른 통계를 반환해야만한다', () => {
      const purchaseAmount = '5000';
      const winningNumbers = '1,2,3,4,5,6';
      const bonusNumber = '7';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      mockRandoms([
        [1, 2, 3, 14, 22, 45],
        [1, 2, 3, 4, 41, 42],
        [1, 2, 3, 4, 5, 42],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 6],
      ]);

      lotteryMachineService.generateLotteryTickets();

      lotteryMachineService.inputWinningNumbers(winningNumbers);
      lotteryMachineService.inputBonusNumber(bonusNumber);

      const { winningStatistics, winningAmount } =
        lotteryMachineService.generateWinningStatistics();

      expect(winningStatistics).toEqual({ 3: 1, 4: 1, 5: 1, 6: 1, bonus: 1 });
      expect(winningAmount).toEqual(LotteryMachineService.STRATEGY.WINNING_AMOUNT);
    });
  });

  describe('calculateTotalReturnRate', () => {
    it('당첨 통계에 따른 수익률을 반환해야만한다', () => {
      const purchaseAmount = '5000';
      const winningNumbers = '1,2,3,4,5,6';
      const bonusNumber = '7';

      lotteryMachineService.inputPurchaseAmount(purchaseAmount);

      mockRandoms([
        [1, 2, 3, 14, 22, 45],
        [1, 2, 3, 4, 41, 42],
        [1, 2, 3, 4, 5, 42],
        [1, 2, 3, 4, 5, 7],
        [1, 2, 3, 4, 5, 6],
      ]);

      lotteryMachineService.generateLotteryTickets();

      lotteryMachineService.inputWinningNumbers(winningNumbers);
      lotteryMachineService.inputBonusNumber(bonusNumber);

      const { winningStatistics, winningAmount } =
        lotteryMachineService.generateWinningStatistics();

      const totalReturnRate = lotteryMachineService.calculateTotalReturnRate(
        winningStatistics,
        winningAmount,
      );

      expect(totalReturnRate).toBe(40631100);
    });
  });
});
