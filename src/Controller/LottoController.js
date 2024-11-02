/**
 * LottoController 클래스는 로또 애플리케이션의 주요 로직을 관리하는 컨트롤러입니다.
 * 사용자 입력, 로또 구매, 결과 계산 및 결과 표시를 담당합니다.
 */
export default class LottoController {
  /**
   * LottoController의 생성자입니다.
   * 로또 서비스, IO 서비스, 순위 계산기, 유효성 검사 서비스, 통계 서비스를 주입받아 초기화합니다.
   *
   * @constructor
   * @param {Object} dependencies - 의존성 객체로, 각 서비스 인스턴스를 포함합니다.
   * @param {LotteryService} dependencies.lotteryService - 로또 관련 로직을 관리하는 서비스입니다.
   * @param {IOService} dependencies.ioService - 입력 및 출력을 담당하는 서비스입니다.
   * @param {RankCalculator} dependencies.rankCalculator - 로또 순위 계산을 담당하는 서비스입니다.
   * @param {ValidationService} dependencies.validationService - 입력 검증을 담당하는 서비스입니다.
   * @param {StatisticsService} dependencies.statisticsService - 통계를 계산하는 서비스입니다.
   */
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

  /**
   * 사용자의 구매 금액을 입력받는 메서드입니다.
   * 유효한 금액이 입력될 때까지 반복합니다.
   *
   * @async
   * @function getPurchaseAmount
   * @returns {Promise<number>} - 유효한 구매 금액을 반환하는 Promise입니다.
   */
  async getPurchaseAmount() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidMoney,
      this.ioService.systemMessages.askUserAmount,
    );
  }

  /**
   * 구매 금액을 기반으로 로또를 생성하고, 구매한 로또 개수와 번호를 출력하는 메서드입니다.
   *
   * @function purchaseLotteries
   * @param {number} purchaseAmount - 사용자가 입력한 구매 금액입니다.
   * @returns {Array} - 생성된 로또 번호 배열을 반환합니다.
   */
  purchaseLotteries(purchaseAmount) {
    const numberOfTickets =
      this.lotteryService.calculateNumberOfNotes(purchaseAmount);
    const purchasedLotteries =
      this.lotteryService.generateLotteries(numberOfTickets);
    this.ioService.printMessage(`${numberOfTickets}개를 구매했습니다.`);
    this.ioService.printLotteries(purchasedLotteries);
    return purchasedLotteries;
  }

  /**
   * 사용자가 입력한 당첨 번호를 받아오는 메서드입니다.
   * 유효한 당첨 번호가 입력될 때까지 반복합니다.
   *
   * @async
   * @function getWinningNumbers
   * @returns {Promise<Array<number>>} - 유효한 당첨 번호 배열을 반환하는 Promise입니다.
   */
  async getWinningNumbers() {
    return this.ioService.getInputWhileValid(
      this.validationService.isValidLottoNumber,
      this.ioService.systemMessages.askUserLottoNumber,
    );
  }

  /**
   * 사용자로부터 보너스 번호를 입력받는 메서드입니다.
   * 유효한 보너스 번호가 입력될 때까지 반복하며, 당첨 번호와 중복되지 않도록 검증합니다.
   *
   * @async
   * @function getBonusNumber
   * @param {Array<number>} winningNumbers - 입력된 당첨 번호 배열입니다.
   * @returns {Promise<number>} - 유효한 보너스 번호를 반환하는 Promise입니다.
   */
  async getBonusNumber(winningNumbers) {
    return this.ioService.getInputWhileValid(
      (input) =>
        this.validationService.isValidBonusNumber(input, winningNumbers),
      this.ioService.systemMessages.askUserBonusNumber,
    );
  }

  /**
   * 구매한 로또와 당첨 번호, 보너스 번호를 사용하여 결과를 계산하는 메서드입니다.
   * 각 순위별 로또 개수를 반환합니다.
   *
   * @function calculateResults
   * @param {Array} purchasedLotteries - 구매한 로또 번호 배열입니다.
   * @param {Array<number>} winningNumbers - 입력된 당첨 번호 배열입니다.
   * @param {number} bonusNumber - 입력된 보너스 번호입니다.
   * @returns {Object} - 각 순위별 로또 개수 객체를 반환합니다.
   */
  calculateResults(purchasedLotteries, winningNumbers, bonusNumber) {
    this.rankCalculator.calculateLotteries(
      purchasedLotteries,
      winningNumbers,
      bonusNumber,
    );
    return this.rankCalculator.getRankCounts();
  }

  /**
   * 로또 결과와 구매 금액을 바탕으로 통계 및 수익률을 계산하고, 결과를 출력하는 메서드입니다.
   *
   * @function displayResults
   * @param {Object} rankCounts - 각 순위별 로또 개수 객체입니다.
   * @param {number} purchaseAmount - 사용자가 입력한 구매 금액입니다.
   */
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

  /**
   * 각 순위별 로또 개수를 출력하는 메서드입니다 (시연용).
   *
   * @function displayRank
   * @param {Object} rankCounts - 각 순위별 로또 개수 객체입니다.
   */
  displayRank(rankCounts) {
    console.log(rankCounts);
  }
}
