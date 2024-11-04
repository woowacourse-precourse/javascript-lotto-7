import LottoNumberGenerateService from '../../src/Service/LottoNumberGenerateService';
import LottoTicketService from '../../src/Service/LottoTicketService';
import { mockRandoms } from '../ApplicationTest';

describe('LottoTicketService 테스트', () => {
  test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const purchaseAmount = 3000;
    const mockValues = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    const outputLottoCount = 3;
    const outputLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];

    mockRandoms(mockValues);

    const lottoNumberGenerateService = new LottoNumberGenerateService();
    const lottoTicketService = new LottoTicketService(
      lottoNumberGenerateService
    );
    lottoTicketService.generateLottoTickets(purchaseAmount);
    const { lottoCount, lottos } = lottoTicketService.getLottos();

    expect(lottoCount).toBe(outputLottoCount);

    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(outputLottos[index]);
    });
  });
});
