import RankDTO from "../dto/RankDTO.js";
import RankCalculator from "../models/RankCalculator.js";

class LottoResultController {
  #outputView;

  constructor({ _, outputView }) {
    this.#outputView = outputView;
  }

  async showLottoResult(purchaseHistory, winningNumbers, bonusNumber) {
    const rankResult = this.#calculateRank(purchaseHistory, winningNumbers, bonusNumber);
    const rankDTO = RankDTO.from(rankResult);
    this.#outputView.printRankResult(rankDTO);
  }

  #calculateRank(purchaseHistory, winningNumbers, bonusNumber) {
    const rankCalculator = new RankCalculator(purchaseHistory, winningNumbers, bonusNumber);
    return rankCalculator.calculate();
  }
}

export default LottoResultController;
