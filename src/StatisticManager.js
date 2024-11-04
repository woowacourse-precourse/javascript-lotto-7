import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_STATISTICS, PRIZE } from "./constants/constant.js";
import MatchingResults from "./MatchingResults.js";

class StatisticManager {
  calculateRate(matchingResults, purchaseAmount) {
    const totalPrize =
      PRIZE.THREE * matchingResults.three +
      PRIZE.FOUR * matchingResults.four +
      PRIZE.FIVE * matchingResults.five +
      PRIZE.FIVEBONUS * matchingResults.fiveBonus +
      PRIZE.SIX * matchingResults.six;

    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  async printStatistics(matchingResults, rate) {
    await Console.print(MESSAGE_STATISTICS().HEADER);
    await Console.print(MESSAGE_STATISTICS(matchingResults.three).MATCH_THREE);
    await Console.print(MESSAGE_STATISTICS(matchingResults.four).MATCH_FOUR);
    await Console.print(MESSAGE_STATISTICS(matchingResults.five).MATCH_FIVE);
    await Console.print(MESSAGE_STATISTICS(matchingResults.fiveBonus).MATCH_FIVE_BONUS);
    await Console.print(MESSAGE_STATISTICS(matchingResults.six).MATCH_SIX);
    await Console.print(MESSAGE_STATISTICS(rate).RATE);
  }

  checkMatchingLottos(userLottoNumbers, winningNumberSet, bonusNumber) {
    const matchingResults = new MatchingResults();

    userLottoNumbers.forEach((lotto) => {
      const matchCount = lotto.getNumbers().filter((num) => winningNumberSet.has(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      matchingResults.update(matchCount, hasBonus);
    });

    return matchingResults.getResults();
  }
}

export default StatisticManager;
