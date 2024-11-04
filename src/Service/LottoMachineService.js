class LottoMachineService {
  constructor(
    lottoTicketService,
    winningResultCalculatorService,
    returnRateCalculatorService
  ) {
    this.lottoTicketService = lottoTicketService;
    this.winningResultCalculatorService = winningResultCalculatorService;
    this.returnRateCalculatorService = returnRateCalculatorService;
  }

  generateLottoTickets(purchaseAmount) {
    this.lottoTicketService.generateLottoTickets(purchaseAmount);
    return this.lottoTicketService.getLottos();
  }

  calculateResults(purchaseAmount, winningNumbers, bonusNumber, lottos) {
    const totalWinningRank =
      this.winningResultCalculatorService.calculateWinningResults(
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
