import Winning from "../model/Winning.js";

class LottoWinningController {
  #outputView;
  #winning;
  #lottoCollection;

  constructor(outputView, lottoCollection) {
    this.#outputView = outputView;
    this.#winning = new Winning();
    this.#lottoCollection = lottoCollection;
  }

  startWinningLotto(lottoPurchaseAmount, winningNumber, bonusNumber) {
    this.#printWinningStatsHead();
    this.#printResultMatchCount(winningNumber, bonusNumber);
    this.#printProfitRate(lottoPurchaseAmount);
  }

  #printWinningStatsHead() {
    this.#outputView.outputWinningHead();
  }

  #printResultMatchCount(winningNumber, bonusNumber) {
    this.#outputView.outputWinningStats(
      this.#winning.getMatchCount(
        this.#lottoCollection.getLottoCollection(),
        winningNumber,
        bonusNumber
      )
    );
  }

  #printProfitRate(lottoPurchaseAmount) {
    this.#outputView.outputProfitRate(
      this.#winning.getProfitRate(lottoPurchaseAmount)
    );
  }
}

export default LottoWinningController;
