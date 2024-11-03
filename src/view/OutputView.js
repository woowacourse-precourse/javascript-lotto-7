import { MissionUtils } from "@woowacourse/mission-utils";
import {
  PRINT_MESSAGE,
  START_ERROR,
  WINNING_STATS_HEADER,
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
}

export default OutputView;
