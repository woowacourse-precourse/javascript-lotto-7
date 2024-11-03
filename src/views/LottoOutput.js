import { Console } from "@woowacourse/mission-utils";
import { LOTTO_OUTPUT } from "../constants/Constants.js";
import LottoController from "../controllers/LottoController.js";

class LottoOutput {
  static lottoController = new LottoController();

  static printLottoCnt(lottoCnt) {
    Console.print(LOTTO_OUTPUT.LOTTO_CNT_OUTPUT(lottoCnt));
    this.printLottoNum(lottoCnt);
  }

  static printLottoNum(lottoCnt) {
    for (let i = 0; i < lottoCnt; i++) {
      let lottoNum = this.lottoController.makeLottoNum();
      Console.print(lottoNum);
    }
  }
}

export default LottoOutput;
