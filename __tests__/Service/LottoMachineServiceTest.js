import Lotto from '../../src/Domain/Lotto';
import LottoMachineService from '../../src/Service/LottoMachineService';
import LottoNumberGenerateService from '../../src/Service/LottoNumberGenerateService';
import LottoTicketService from '../../src/Service/LottoTicketService';
import ReturnRateCalculatorService from '../../src/Service/ReturnRateCalculatorService';
import WinningResultCalculatorService from '../../src/Service/WinningResultCalculatorService';
import { mockRandoms } from '../ApplicationTest';

describe('LottoMachineService 테스트', () => {
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
    const winningResultCalculatorService = new WinningResultCalculatorService();
    const returnRateCalculatorService = new ReturnRateCalculatorService();
    const lottoMachineService = new LottoMachineService(
      lottoTicketService,
      winningResultCalculatorService,
      returnRateCalculatorService
    );

    const { lottoCount, lottos } =
      lottoMachineService.generateLottoTickets(purchaseAmount);

    expect(lottoCount).toBe(outputLottoCount);

    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(outputLottos[index]);
    });
  });

  test('당첨 내역과 총 수익률을 계산한다.', () => {
    const purchaseAmount = 3000;
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([8, 21, 23, 41, 42, 7]),
      new Lotto([8, 21, 23, 41, 1, 2]),
    ];
    const outputReturnRate = 67668333.3;

    const lottoNumberGenerateService = new LottoNumberGenerateService();
    const lottoTicketService = new LottoTicketService(
      lottoNumberGenerateService
    );
    const winningResultCalculatorService = new WinningResultCalculatorService();
    const returnRateCalculatorService = new ReturnRateCalculatorService();
    const lottoMachineService = new LottoMachineService(
      lottoTicketService,
      winningResultCalculatorService,
      returnRateCalculatorService
    );
    const { totalWinningRank, totalReturnRate } =
      lottoMachineService.calculateResults(
        purchaseAmount,
        winningNumbers,
        bonusNumber,
        lottos
      );

    expect(totalWinningRank[0]).toBe(1);
    expect(totalWinningRank[1]).toBe(1);
    expect(totalWinningRank[2]).toBe(0);
    expect(totalWinningRank[3]).toBe(1);
    expect(totalWinningRank[4]).toBe(0);

    expect(totalReturnRate).toBe(outputReturnRate);
  });
});
