import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE, START_ERROR } from "../constant/constant.js";

class OutputView {
  errorOccurred(error) {
    MissionUtils.Console.print(
      `${START_ERROR.START_ERROR_MESSAGE + " " + error.message}`
    );
  }

  outputLottoCount(lottoCount) {
    MissionUtils.Console.print(
      `\n${lottoCount + PRINT_MESSAGE.PRINT_LOTTO_COUNT}`
    );
  }
}

export default OutputView;
