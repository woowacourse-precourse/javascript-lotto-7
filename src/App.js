import { PROMPTS, BONUS, lotteryStatistics } from "./constants.js";
import { printParam, printResult } from "./handler/printHandlers.js";
import {
  handlePurchaseInput,
  handleLotteryNumInput,
  handleBonusLotteryNum,
} from "./handler/inputHandlers.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./class/Lotto.js";

class App {
  async run() {
    const userPurchaseLotteries = await handlePurchaseInput();
    const lotteriesToCompare = this.makeLotteries(userPurchaseLotteries);

    printParam(userPurchaseLotteries + PROMPTS.PURCAHSE_INFO_PROMPT);

    const userLotteryNumbers = await handleLotteryNumInput();
    const bonusLotteryNumber = await handleBonusLotteryNum(userLotteryNumbers);

    const usersLottery = userLotteryNumbers.map((num) => Number(num));
    lotteriesToCompare.forEach(lottery => lottery.printNumOfLotto());
    this.startLotto(lotteriesToCompare, usersLottery, bonusLotteryNumber);
  }

  makeLotteries(counts) {
    const UNIQUE_NUMBERS_RANGE = [1, 45, 6];
    return Array.from({ length: counts }).map((_) => {
      const randomNums = MissionUtils
        .Random
        .pickUniqueNumbersInRange(...UNIQUE_NUMBERS_RANGE)
        .sort((a, b) => a - b);

      return new Lotto(randomNums);
    });
  }

  startLotto(lotteries, users, bonus) {
    const [BONUS_CONDITION, BONUS_RETURN] = BONUS.BONUS_ARRAY;

    const matches = lotteries.map((lotto) => {
      const userMatches = lotto.getLotteryMatches(users).length;
      const isBonus = lotto.getLotteryMatches([bonus]).length;

      if (userMatches === BONUS_CONDITION && isBonus) {
        return BONUS_RETURN;
      }
      return userMatches;
    });
    const statisticsResult = this.checkWins(matches);
  }

  checkWins(matches) {
    const matchCounts = matches.filter((num) => num > 2)
      .reduce((match, count) => {
        match[count] = (match[count] || 0) + 1;
        return match;
      }, {});

    lotteryStatistics.forEach((statistic) => {
      const counts = matchCounts[statistic.matches];
      if (counts) {
        return (statistic.amount = counts);
      }
    });

    return lotteryStatistics;
  }
}

export default App;
