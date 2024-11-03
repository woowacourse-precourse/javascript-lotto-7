import { Random } from '@woowacourse/mission-utils';
import LottoController from '../../src/controllers/LottoController';
import Lotto from '../../src/models/Lotto';
import Prize from '../../src/models/Prize';

jest.mock('../../src/models/Lotto');
jest.mock('../../src/models/Prize');
jest.mock('../../src/models/ResultChecker');
jest.mock('@woowacourse/mission-utils');

describe('controllers/LottoController', () => {
  let lottoController;

  beforeEach(() => {
    jest
      .spyOn(Lotto.prototype, 'getNumbers')
      .mockReturnValue([1, 2, 3, 4, 5, 6]);
    lottoController = new LottoController();
  });

  describe('generateTickets()', () => {
    it.each([
      [1000, 1],
      [5000, 5],
      [10000, 10],
      [5500, 5],
    ])(
      'generates %i tickets for a purchase amount of %i',
      (purchaseAmount, ticketCount) => {
        // given
        Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
        // when
        const tickets = lottoController.generateTickets(purchaseAmount);
        // then
        expect(tickets).toHaveLength(ticketCount);
        tickets.forEach((ticket) => {
          expect(ticket).toBeInstanceOf(Lotto);
          expect(ticket.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
        });
      },
    );
  });

  describe('setWinningNumbers()', () => {
    it.each([
      ['1,2,3,4,5,6', 7, [1, 2, 3, 4, 5, 6], 7],
      ['10,11,12,13,14,15', 16, [10, 11, 12, 13, 14, 15], 16],
    ])(
      'sets winning numbers %s and bonus number %i',
      (winningNumbers, bonusNumber, expectedWinningNumbers, expectedBonus) => {
        // when
        lottoController.setWinningNumbers(winningNumbers, bonusNumber);

        // then
        expect(lottoController.getWinningNumbers()).toEqual(
          expectedWinningNumbers,
        );
        expect(lottoController.getBonusNumber()).toBe(expectedBonus);
      },
    );
  });

  describe('parseWinningNumbers()', () => {
    it.each([
      ['1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]],
      ['10,20,30,40,41,42', [10, 20, 30, 40, 41, 42]],
    ])(
      'should parse winning numbers string %s to array %o',
      (numbersString, expectedArray) => {
        const parsedNumbers =
          lottoController.parseWinningNumbers(numbersString);
        expect(parsedNumbers).toEqual(expectedArray);
      },
    );
  });

  describe('calculateYield()', () => {
    it.each([
      [
        10000,
        { match3: 1, match4: 0, match5: 0, match5Bonus: 0, match6: 0 },
        50000,
        '500.0',
      ],
      [
        20000,
        { match3: 0, match4: 0, match5: 1, match5Bonus: 0, match6: 0 },
        1500000,
        '7500.0',
      ],
    ])(
      'should calculate yield for purchase amount %i and result %o',
      (purchaseAmount, result, totalPrize, expectedYield) => {
        Prize.calculateTotalPrize.mockReturnValue(totalPrize);

        const yieldRate = lottoController.calculateYield(
          purchaseAmount,
          result,
        );
        expect(Prize.calculateTotalPrize).toHaveBeenCalledWith(result);
        expect(yieldRate).toBe(expectedYield);
      },
    );
  });
});
