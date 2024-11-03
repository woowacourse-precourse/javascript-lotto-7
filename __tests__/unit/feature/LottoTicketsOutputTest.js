import { Console } from '@woowacourse/mission-utils';
import LottoController from '../../../src/components/LottoController.js';

describe('로또 발행 및 출력 테스트', () => {
  let lottoController;

  beforeEach(() => {
    lottoController = new LottoController();
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };

  const validateGenerateLottoTickets = (lottoTickets, ticketCount) => {
    expect(lottoTickets).toHaveLength(ticketCount);

    lottoTickets.forEach((lottoTicket) => {
      expect(lottoTicket).toHaveLength(6);

      lottoTicket.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });

      const uniqueNumbers = new Set(lottoTicket);
      expect(uniqueNumbers.size).toBe(6);
    });
  };

  const validateDisplayLottoTickets = (localLottoController, lottoTickets) => {
    const logSpy = getLogSpy();
    localLottoController.displayLottoTickets();

    lottoTickets.forEach((lottoTicket) => {
      expect(logSpy).toHaveBeenCalledWith(lottoTicket);
    });
  };

  test('구매금액 : 천원', () => {
    lottoController.setPurchaseAmount(1000);
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 1);
    validateDisplayLottoTickets(lottoController, lottoTickets);
  });

  test('구매금액 : 만원', () => {
    lottoController.setPurchaseAmount(10000);
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 10);
    validateDisplayLottoTickets(lottoController, lottoTickets);
  });

  test('구매금액 : 십만원', () => {
    lottoController.setPurchaseAmount(100000);
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 100);
    validateDisplayLottoTickets(lottoController, lottoTickets);
  });

  test('구매금액 : 백만원', () => {
    lottoController.setPurchaseAmount(1000000);
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 100);
    validateDisplayLottoTickets(lottoController, lottoTickets);
  });
});
