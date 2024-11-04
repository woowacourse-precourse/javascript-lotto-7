import RankCalculator from "../models/RankCalculator.js";
import OutputView from "../view/OutputView.js";

class LottoResultController {
  async showLottoResult(purchaseHistory, winningNumbers, bonusNumber) {
    const rankResult = this.#calculateRank(purchaseHistory, winningNumbers, bonusNumber);
    OutputView.printRankResult(rankResult.getLottoRankResult());
  }

  #calculateRank(purchaseHistory, winningNumbers, bonusNumber) {
    const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);
    return rankCalculator.calculate();
  }
}

export default LottoResultController;
