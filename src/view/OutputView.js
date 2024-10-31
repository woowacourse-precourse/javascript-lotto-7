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
      Console.print(lotto.getNumbers());
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
};

export default OutputView;
