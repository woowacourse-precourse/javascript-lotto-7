import LottoTicketService from './LottoTicketService.js';
import ReturnRateCalculatorService from './ReturnRateCalculatorService.js';
import WinningResultCalculatorService from './WinningResultCalculatorService.js';

class LottoMachineService {
  constructor() {
    this.lottoTicketService = new LottoTicketService();
    this.winningResultCalculator = new WinningResultCalculatorService();
    this.returnRateCalculatorService = new ReturnRateCalculatorService();
  }

  generateLottoTickets(purchaseAmount) {
    this.lottoTicketService.generateLottoTickets(purchaseAmount);
    return this.lottoTicketService.getLottos();
  }

  calculateResults(purchaseAmount, winningNumbers, bonusNumber, lottos) {
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

    return {
      totalWinningRank,
      totalReturnRate,
    };
  }
}

export default LottoMachineService;
