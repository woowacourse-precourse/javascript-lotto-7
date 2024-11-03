import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import LottoTicketService from './LottoTicketService.js';
import ReturnRateCalculatorService from './ReturnRateCalculatorService.js';
import WinningResultCalculatorService from './WinningResultCalculatorService.js';

class LottoMachineService {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoTicketService = new LottoTicketService();
    this.winningResultCalculator = new WinningResultCalculatorService();
    this.returnRateCalculatorService = new ReturnRateCalculatorService();
  }

  async run() {
    const purchaseAmount = await this.inputView.readPurchaseAmount();

    this.lottoTicketService.generateLottoTickets(purchaseAmount);
    const lottos = this.lottoTicketService.getLottos();

    this.outputView.printLottoNumbers(purchaseAmount / 1000, lottos);

    const winningNumbers = await this.inputView.readWinningNumbers();
    const bonusNumber = await this.inputView.readBonusNumber(winningNumbers);

    const totalWinningRank =
      this.winningResultCalculator.calculateWinningResults(
        winningNumbers,
        bonusNumber,
        lottos
      );
    const totalReturnRate =
      this.returnRateCalculatorService.calculateTotalReturnRate(
        purchaseAmount,
        totalWinningRank
      );

    this.outputView.printWinningStatistics(totalWinningRank);
    this.outputView.printTotalReturnRate(totalReturnRate);
  }
}

export default LottoMachineService;
