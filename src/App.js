import LottoGenerator from "./functions/LottoGenerator.js";
import LottoResult from "./LottoResult.js";
import RevenueCalculator from "./functions/RevenueCalculator.js";
import InputControl from "./controlers/InputControl.js";
import OutputControl from "./controlers/OutputControl.js";

class App {
  async run() {
    const price = await InputControl.getPrice();
    const lottoGenerator = new LottoGenerator(price);
    OutputControl.showPurchase(lottoGenerator.numberOfTickets, lottoGenerator.lottoNumbers);

    const [winningNumber, bonusNumber] = await this.getWinningAndBonusNumbers();
    const results = this.generateResult(price, lottoGenerator.lottoNumbers, {
      win: winningNumber,
      bonus: bonusNumber,
    });

    this.showStatistics(results);
  }

  async getWinningAndBonusNumbers() {
    const winningNumber = await InputControl.getWinningNumber();
    const bonusNumber = await InputControl.getBonusNumber(winningNumber);
    return [winningNumber, bonusNumber];
  }

  generateResult(price, myLotto, winningLotto) {
    const lottoResult = new LottoResult(myLotto);
    const revenueCalculator = new RevenueCalculator();

    lottoResult.start(winningLotto);
    lottoResult.generateStatistics();
    revenueCalculator.calculateRevenue(lottoResult.reward, price);

    return {
      statistics: lottoResult.statistics,
      revenue: revenueCalculator.revenue,
    };
  }

  showStatistics(results) {
    OutputControl.showStatistics(results.statistics);
    OutputControl.showRevenue(results.revenue);
  }
}

export default App;
