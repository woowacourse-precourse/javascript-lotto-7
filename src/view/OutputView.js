import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants.js";

/**
 * 출력 기능
 */

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printLottoCount(lottoController) {
    Console.print(
      OUTPUT_MESSAGE.LOTTO_TOTAL_COUNT(lottoController.getLottoTotalNumber())
    );
  },

  printLottos(lottoController) {
    lottoController.getAllLottos().forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printNewLine() {
    Console.print("\n");
  },

  printStatisticsTitle() {
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS_TITLE);
  },

  printDivider() {
    Console.print(OUTPUT_MESSAGE.DIVIDER);
  },

  printWinningStatistics(winningPrizeStatistic) {
    winningPrizeStatistic.forEach((count, index) => {
      const messageGenerators = [
        OUTPUT_MESSAGE.STATISTIC_WINNING_FIFTH_PLACE,
        OUTPUT_MESSAGE.STATISTIC_WINNING_FOURTH_PLACE,
        OUTPUT_MESSAGE.STATISTIC_WINNING_THIRD_PLACE,
        OUTPUT_MESSAGE.STATISTIC_WINNING_SECOND_PLACE,
        OUTPUT_MESSAGE.STATISTIC_WINNING_FIRST_PLACE,
      ];
      Console.print(messageGenerators[index](count));
    });
  },

  printProfit(rate) {
    Console.print(OUTPUT_MESSAGE.PROFIT_RATE(rate));
  },
};

export default OutputView;
