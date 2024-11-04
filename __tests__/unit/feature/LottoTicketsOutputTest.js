import LottoController from '../../../src/components/LottoController.js';
import Input from '../../../src/utils/io/Input.js';

describe('로또 발행 테스트', () => {
  let lottoController;

  beforeAll(() => {
    Input.promptRetry = jest.fn();
  });

  beforeEach(() => {
    lottoController = new LottoController();
  });

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

  const validateAscendingOrder = (lottoTickets) => {
    lottoTickets.forEach((lottoTicket) => {
      const sortedTicket = lottoTicket.slice().sort((a, b) => a - b);
      expect(lottoTicket).toEqual(sortedTicket);
    });
  };

  test('구매금액 : 천원', async () => {
    const mockPurchaseAmount = 1000;
    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);
    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 1);
    validateAscendingOrder(lottoTickets);
  });

  test('구매금액 : 만원', async () => {
    const mockPurchaseAmount = 10000;
    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);
    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 10);
    validateAscendingOrder(lottoTickets);
  });

  test('구매금액 : 십만원', async () => {
    const mockPurchaseAmount = 100000;
    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);
    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 100);
    validateAscendingOrder(lottoTickets);
  });

  test('구매금액 : 백만원', async () => {
    const mockPurchaseAmount = 1000000;
    Input.promptRetry.mockResolvedValueOnce(mockPurchaseAmount);
    await lottoController.setPurchaseAmount();
    lottoController.generateLottoTickets();

    const lottoTickets = lottoController.getLottoTickets();

    validateGenerateLottoTickets(lottoTickets, 1000);
    validateAscendingOrder(lottoTickets);
  });
});
