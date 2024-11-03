import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import LottoTicketService from './LottoTicketService.js';
import WinningResultCalculator from './WinningResultCalculator.js';

class LottoMachineService {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoTicketService = new LottoTicketService();
    this.winningResultCalculator = new WinningResultCalculator();
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
    const totalReturnRate = this.calculateTotalReturnRate(
      purchaseAmount,
      totalWinningRank
    );

    this.outputView.printWinningStatistics(totalWinningRank);
    this.outputView.printTotalReturnRate(totalReturnRate);
  }

  calculateTotalReturnRate(purchaseAmount, totalWinningRank) {
    const prizeAmounts = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalPrize = 0;

    totalWinningRank.map((rankCount, index) => {
      totalPrize += rankCount * prizeAmounts[index];
    });

    const totalReturnRate = (totalPrize / purchaseAmount) * 100;
    return Math.round(totalReturnRate * 100) / 100;
  }
}

export default LottoMachineService;
