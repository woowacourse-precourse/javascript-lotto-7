import LottoMachineService from '../Service/LottoMachineService.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

class LottoMachineController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoMachineService = new LottoMachineService();
  }

  async run() {
    const purchaseAmount = await this.inputView.readPurchaseAmount();
    const lottos =
      this.lottoMachineService.generateLottoTickets(purchaseAmount);

    this.outputView.printLottoNumbers(purchaseAmount / 1000, lottos);

    const winningNumbers = await this.inputView.readWinningNumbers();
    const bonusNumber = await this.inputView.readBonusNumber(winningNumbers);

    const results = this.lottoMachineService.calculateResults(
      purchaseAmount,
      winningNumbers,
      bonusNumber,
      lottos
    );

    this.outputView.printWinningStatistics(results.totalWinningRank);
    this.outputView.printTotalReturnRate(results.totalReturnRate);
  }
}

export default LottoMachineController;
