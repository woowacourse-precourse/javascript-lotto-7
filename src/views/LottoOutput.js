import { Console } from "@woowacourse/mission-utils";
import { LOTTO_OUTPUT } from "../constants/Constants.js";

class LottoOutput {
  static printLottoCnt(lottoCnt) {
    Console.print(LOTTO_OUTPUT.LOTTO_CNT_OUTPUT(lottoCnt));
  }
}

export default LottoOutput;
