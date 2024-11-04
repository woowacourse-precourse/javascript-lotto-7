import LottoMachineController from '../../src/Controller/LottoMachineController';
import LottoMachineService from '../../src/Service/LottoMachineService';
import LottoNumberGenerateService from '../../src/Service/LottoNumberGenerateService';
import LottoTicketService from '../../src/Service/LottoTicketService';
import ReturnRateCalculatorService from '../../src/Service/ReturnRateCalculatorService';
import WinningResultCalculatorService from '../../src/Service/WinningResultCalculatorService';
import InputView from '../../src/View/InputView';
import OutputView from '../../src/View/OutputView';
import { getLogSpy, mockQuestions, mockRandoms } from '../ApplicationTest';

describe('LottoMachineController 테스트', () => {
  test('기능 테스트', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);

    const inputView = new InputView();
    const outputView = new OutputView();
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
    const lottoMachineController = new LottoMachineController(
      inputView,
      outputView,
      lottoMachineService
    );
    await lottoMachineController.run();

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
