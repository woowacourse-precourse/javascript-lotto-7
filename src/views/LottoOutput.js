import { Console } from "@woowacourse/mission-utils";
import { LOTTO_OUTPUT } from "../constants/Constants.js";
import LottoController from "../controllers/LottoController.js";

class LottoOutput {
  printLottoCnt(lottoCnt) {
    Console.print(LOTTO_OUTPUT.LOTTO_CNT_OUTPUT(lottoCnt));
    this.printLottoNum(lottoCnt);
  }

  printLottoNum(lottoCnt) {
    const lottoController = new LottoController();
    for (let i = 0; i < lottoCnt; i++) {
      let lottoNum = lottoController.makeLottoNum();
      Console.print(`[${lottoNum.join(", ")}]`);
    }
  }

  printWinStat(matchCntArr) {
    Console.print(`3개 일치 (5,000원) - ${matchCntArr[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCntArr[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCntArr[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCntArr[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCntArr[1]}개`);
  }

  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default LottoOutput;
