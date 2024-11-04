import { PROMPTS, BONUS, lotteryStatistics } from "./constants.js";
import {
  printParam,
  printPercent,
  printResult,
} from "./handler/printHandlers.js";
import {
  handlePurchaseInput,
  handleLotteryNumInput,
  handleBonusLotteryNum,
} from "./handler/inputHandlers.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

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
      const isBonus = lotto.getLotteryMatches(Number([bonus])).length;

      if (userMatches === BONUS_CONDITION && isBonus) {
        return BONUS_RETURN;
      }
      return userMatches;
    });
    const statisticsResult = this.checkWins(matches);
    this.finishLotto(statisticsResult, matches.length);
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

  finishLotto(results, tickets) {
    printParam(PROMPTS.SHOW_STATISTICS);
    const [_, IS_BONUS] = BONUS.BONUS_ARRAY;

    results.forEach(result => {
      if (result.matches === IS_BONUS) {
        return printResult(result, BONUS.BONUS_MENT);
      }
      printResult(result);
    });
    this.showProfitRate(results, tickets);
  }

  showProfitRate(result, tickets) {
    const totalProfit = result
      .map((resultObj) => resultObj.price * Number(resultObj.amount))
      .reduce((prev, curr) => prev + curr, 0);

    const profitRate = Math.round(((totalProfit / tickets) * 100) * 100) / 100;
    printPercent(profitRate);
  }
}

export default App;
