import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../static/Message.js";
import Rank from "../static/Rank.js";

const OutputView = {
  printPurchaseCount(count) {
    Console.print(PRINT_MESSAGE.output.purchaseCount(count));
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(", ")}]`);
  },

  printStatistics(results) {
    Console.print(PRINT_MESSAGE.output.statisticsHeader);
    this.printMatchResults(results);
  },

  printMatchResults(results) {
    const rankTypes = this.getRankTypes();
    rankTypes.forEach((rank) => this.printRankResult(rank, results[rank]));
  },

  getRankTypes() {
    return Rank.prizeNumber;
  },
  getRankName(rank) {
    return Rank.resultText[rank];
  },

  printRankResult(rank, count) {
    const message =
      PRINT_MESSAGE.output.matchResult[this.getRankName(rank)](count);
    Console.print(message);
  },

  printProfitRate(rate) {
    Console.print(PRINT_MESSAGE.output.profitRate(rate));
  },

  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;