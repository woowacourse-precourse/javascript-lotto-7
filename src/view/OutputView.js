import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/constant.js";

class OutputView {
  errorOccurred(error) {
    MissionUtils.Console.print(`[ERROR] ${error.message}`);
  }
}

export default OutputView;
