import { MissionUtils } from "@woowacourse/mission-utils";
import Constants from "./Constants.js";
import Lotto from "./Lotto.js";

class LottoResultCalculator {
  #purchaselottoList;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaselottoList, winningNumbers, bonusNumber) {
    this.#purchaselottoList = purchaselottoList;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #calculateRankCount() {
    const rankCounts = { ...Constants.INITIAL_RANK_RESULTS };

    this.#purchaselottoList.forEach((numbers) => {
      const lotto = new Lotto(numbers);
      const rank = lotto.calculateRank(this.#winningNumbers, this.#bonusNumber);

      if (rankCounts.hasOwnProperty(rank)) {
        rankCounts[rank]++;
      }
    });

    return rankCounts;
  }

  #calculateTotalPrize(rankCounts) {
    return Object.keys(rankCounts).reduce((total, rank) => {
      const prize = Constants.RANKING_PRIZES[rank];
      return total + rankCounts[rank] * prize;
    }, 0);
  }

  #getBonusText(matches, BonusMatch) {
    if (matches === 5 && BonusMatch) {
      return Constants.BONUS_TEXT;
    }
    return "";
  }

  #printStatisticsHeader() {
    MissionUtils.Console.print(Constants.WINNING_STATISTICS_HEADER);
  }

  #printRankStatistics(rankCounts) {
    let rank = Constants.MINIMUM_RANK;

    while (rank) {
      const { matches, BonusMatch = false } = Constants.RANKINGS[rank];
      const prize = Constants.RANKING_PRIZES[rank].toLocaleString();
      const bonusText = this.#getBonusText(matches, BonusMatch);

      MissionUtils.Console.print(
        `${matches}${Constants.MATCH_TEXT}${bonusText} (${prize}원) - ${rankCounts[rank]}개`
      );
      
      rank -= 1;
    }
  }

  #printProfitRate(totalPrizeMoney, purchaseAmount) {
    const profitRate = ((totalPrizeMoney / purchaseAmount) * 100).toFixed(
      Constants.DECIMAL_PLACES
    );
    MissionUtils.Console.print(
      `${Constants.PROFIT_RATE_TEXT} ${profitRate}${Constants.PERCENTAGE_SYMBOL}`
    );
  }

  printResultCalculate(purchaseAmount) {
    const rankCounts = this.#calculateRankCount();
    const totalPrizeMoney = this.#calculateTotalPrize(rankCounts);

    MissionUtils.Console.print(Constants.EMPTY_LINE);
    this.#printStatisticsHeader();
    this.#printRankStatistics(rankCounts);
    this.#printProfitRate(totalPrizeMoney, purchaseAmount);
  }
}

export default LottoResultCalculator;
