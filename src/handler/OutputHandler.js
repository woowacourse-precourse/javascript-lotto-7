import { LOTTO_RANK } from "../utils/GameConstants.js";
import OutputView from "../views/OutputView.js";

class OutputHandler {
  // 로또 구매 개수에 따라 구매 내역 출력
  static showLottoResult(lottos) {
    OutputView.showPurchaseCount(lottos.length);
    lottos.forEach((lotto) => OutputView.showLottoNumbers(lotto.getNumbers()));
  }

  // 당첨 통계 결과 출력
  static showWinningStatisticsResult(results, totalPrize, purchaseAmount) {
    OutputView.showWinningStatisticsResult();
    this.showWinningResult(results);
    this.showProfitRate(totalPrize, purchaseAmount);
  }

  // 일치하는 번호에 따라 당첨 결과 출력
  static showWinningResult(results) {
    Object.values(LOTTO_RANK)
      .sort((a, b) => b.matchCount - a.matchCount)
      .forEach((rank) => {
        const count = rank.hasBonus
          ? results["5B"] || 0
          : results[rank.matchCount] || 0;
        OutputView.showWinningMessage(rank.message, count);
      });
  }

  // 수익률 출력
  static showProfitRate(totalPrize, purchaseAmount) {
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    OutputView.showProfitRate(profitRate);
  }
}

export default OutputHandler;
