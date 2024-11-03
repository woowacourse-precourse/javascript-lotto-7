import { MissionUtils } from "@woowacourse/mission-utils";
import {
  PRINT_MESSAGE,
  PROFIT_RATE_MESSAGE,
  START_ERROR,
  WINNING_STATS_HEADER,
  WINNING_STATS_MESSAGE,
} from "../constant/constant.js";

class OutputView {
  errorOccurred(error) {
    MissionUtils.Console.print(
      `${START_ERROR.START_ERROR_MESSAGE + " " + error.message}`
    );
  }

  outputLottoCount(lottoCount) {
    MissionUtils.Console.print(
      `\n${PRINT_MESSAGE.PRINT_LOTTO_COUNT.replace("{lottoCount}", lottoCount)}`
    );
  }

  outputLottoNumbers(lotto) {
    MissionUtils.Console.print(`[${lotto.getLottoNumber().join(", ")}]`);
  }

  outputWinningHead() {
    MissionUtils.Console.print(WINNING_STATS_HEADER);
  }

  outputWinningStats(matchCount) {
    MissionUtils.Console.print(
      WINNING_STATS_MESSAGE.THREE_MATCH.replace("{count}", matchCount[3])
    );
    MissionUtils.Console.print(
      WINNING_STATS_MESSAGE.FOUR_MATCH.replace("{count}", matchCount[4])
    );
    MissionUtils.Console.print(
      WINNING_STATS_MESSAGE.FIVE_MATCH.replace("{count}", matchCount[5])
    );
    MissionUtils.Console.print(
      WINNING_STATS_MESSAGE.FIVE_MATCH_BONUS.replace(
        "{count}",
        matchCount["5+bonus"]
      )
    );
    MissionUtils.Console.print(
      WINNING_STATS_MESSAGE.SIX_MATCH.replace("{count}", matchCount[6])
    );
  }

  outputProfitRate(profitRate) {
    MissionUtils.Console.print(
      PROFIT_RATE_MESSAGE.PROFIT_RATE.replace("{profit}", profitRate)
    );
  }
}

export default OutputView;
