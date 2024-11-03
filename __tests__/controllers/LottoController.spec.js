import { Random } from '@woowacourse/mission-utils';
import LottoController from '../../src/controllers/LottoController';
import Lotto from '../../src/models/Lotto';

jest.mock('../../src/models/Lotto');
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
});
