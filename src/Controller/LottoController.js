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
    this.displayResults(rankCounts, purchaseAmount);
  }

  async getPurchaseAmount() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidMoney,
      '구입금액을 입력해 주세요.',
    );
  }

  purchaseLotteries(purchaseAmount) {
    const numberOfTickets =
      this.lotteryService.calculateNumberOfTickets(purchaseAmount);
    const purchasedLotteries =
      this.lotteryService.generateLotteries(numberOfTickets);
    this.ioService.printMessage(`${numberOfTickets}개를 구매했습니다.`);
    this.ioService.printLotteries(purchasedLotteries);
    return purchasedLotteries;
  }

  async getWinningNumbers() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidLottoNumber,
      '당첨 번호를 입력해 주세요.',
    );
  }

  async getBonusNumber(winningNumbers) {
    return this.ioService.getInputWhileValid(
      (input) =>
        this.validationService.isValidBonusNumber(input, winningNumbers),
      '보너스 번호를 입력해 주세요.',
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
    this.ioService.printRevenueRate(
      this.statisticsService.calculateTotalRevenue(rankCounts, purchaseAmount),
      purchaseAmount,
    );
  }
}
