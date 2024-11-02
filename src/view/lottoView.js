import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RESULT } from "../constants/lottoDetails.js";

class LottoView {
  printLottoList(lottoList) {
    Console.print(`\n${lottoList.length}개를 구매했습니다.`)
    for (let lotto of lottoList){
      Console.print(lotto.getLottoNumber());
    };
  };

  printResultMessage() {
    Console.print(LOTTO_RESULT.WINNING_STATISTICS);
    Console.print(LOTTO_RESULT.DIVIDING_LINE);
  };

  printUserRank(userDetails) {
    const lottoCount = [];
    for(const [_, count] of Object.entries(userDetails)) {
      lottoCount.push(count);
    };
    LOTTO_RESULT.printLottoStatistic(lottoCount);
  };

  printProfit(profit) {
    Console.print(LOTTO_RESULT.printProfit(profit));
  };
}

export default LottoView;