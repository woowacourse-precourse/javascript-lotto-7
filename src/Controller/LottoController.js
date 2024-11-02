export default class LottoController {
  constructor({
    lotteryService,
    ioService,
    rankCalculator,
    validationService,
    statisticsService,
  }) {
    this.lotteryService = lotteryService;
    this.ioService = ioService;
    this.rankCalculator = rankCalculator;
    this.validationService = validationService;
    this.statisticsService = statisticsService;
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const purchasedLotteries = this.purchaseLotteries(purchaseAmount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const rankCounts = this.calculateResults(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );
    // 시연용 코드
    // this.displayRank(rankCounts);

    this.displayResults(rankCounts, purchaseAmount);
  }

  async getPurchaseAmount() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidMoney,
      this.ioService.systemMessages.askUserAmount,
    );
  }

  purchaseLotteries(purchaseAmount) {
    const numberOfTickets =
      this.lotteryService.calculateNumberOfNotes(purchaseAmount);
    const purchasedLotteries =
      this.lotteryService.generateLotteries(numberOfTickets);
    this.ioService.printMessage(`${numberOfTickets}개를 구매했습니다.`);
    this.ioService.printLotteries(purchasedLotteries);
    return purchasedLotteries;
  }

  async getWinningNumbers() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidLottoNumber,
      this.ioService.systemMessages.askUserLottoNumber,
    );
  }

  async getBonusNumber(winningNumbers) {
    return this.ioService.getInputWhileValid(
      (input) =>
        this.validationService.isValidBonusNumber(input, winningNumbers),
      this.ioService.systemMessages.askUserBonusNumber,
    );
  }

  calculateResults(purchasedLotteries, winningNumbers, bonusNumber) {
    this.rankCalculator.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );
    return this.rankCalculator.getRankCounts();
  }

  displayResults(rankCounts, purchaseAmount) {
    this.ioService.printStatistics(rankCounts);
    const totalRevenue = this.statisticsService.calculateTotalRevenue(
      rankCounts,
      purchaseAmount,
    );
    this.ioService.printRevenueRate(
      this.statisticsService.calculateRevenueRate(totalRevenue, purchaseAmount),
    );
  }

  // 시연용 코드
  displayRank(rankCounts) {
    console.log(rankCounts);
  }
}
