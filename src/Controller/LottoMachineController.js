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
    const { lottoCount, lottos } =
      this.lottoMachineService.generateLottoTickets(purchaseAmount);

    this.outputView.printLottoNumbers(lottoCount, lottos);

    const winningNumbers = await this.inputView.readWinningNumbers();
    const bonusNumber = await this.inputView.readBonusNumber(winningNumbers);

    const { totalWinningRank, totalReturnRate } =
      this.lottoMachineService.calculateResults(
        purchaseAmount,
        winningNumbers,
        bonusNumber,
        lottos
      );

    this.outputView.printWinningStatistics(totalWinningRank);
    this.outputView.printTotalReturnRate(totalReturnRate);
  }
}

export default LottoMachineController;
