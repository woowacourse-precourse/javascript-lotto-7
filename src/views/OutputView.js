import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../static/Message.js";

const OutputView = {
  printPurchaseCount(count) {
    Console.print(PRINT_MESSAGE.output.purchaseCount(count));
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(", ")}]`);
  },

  printStatistics(results) {
    Console.print(PRINT_MESSAGE.output.statisticsHeader);
    Console.print(PRINT_MESSAGE.output.matchResult.three(results[3]));
    Console.print(PRINT_MESSAGE.output.matchResult.four(results[4]));
    Console.print(PRINT_MESSAGE.output.matchResult.five(results[5]));
    Console.print(PRINT_MESSAGE.output.matchResult.fiveBonus(results["5+"]));
    Console.print(PRINT_MESSAGE.output.matchResult.six(results[6]));
  },

  printProfitRate(rate) {
    Console.print(PRINT_MESSAGE.output.profitRate(rate));
  },

  printError(error) {
    Console.print(error.message);
  }
};

export default OutputView;