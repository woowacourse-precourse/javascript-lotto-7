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
      return ", 보너스 볼 일치";
    }
    return "";
  }

  printResultCalculate(purchaseAmount) {
    const rankCounts = this.#calculateRankCount();
    const totalPrizeMoney = this.#calculateTotalPrize(rankCounts);

    MissionUtils.Console.print("당첨 통계\n---");

    let rank = 5;
    
    while (rank) {
      const { matches, BonusMatch = false } = Constants.RANKINGS[rank];
      const prize = Constants.RANKING_PRIZES[rank].toLocaleString();

      const bonusText = this.#getBonusText(matches, BonusMatch);

      MissionUtils.Console.print(
        `${matches}개 일치${bonusText} (${prize}원) - ${rankCounts[rank]}개`
      );

      rank -= 1;
    }

    const profitRate = ((totalPrizeMoney / purchaseAmount) * 100).toFixed(
      Constants.DECIMAL_PLACES
    );
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoResultCalculator;
