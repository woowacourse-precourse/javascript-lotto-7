import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RESULT } from "../constants/lottoDetails.js";
import { DELIMITER, MESSAGE } from "../constants/message.js";

class LottoView {
  printLottoList(lottoList) {
    Console.print(MESSAGE.printLottoList(lottoList.length));
    for (let lotto of lottoList){
      Console.print(`[${lotto.getLottoNumber().join(DELIMITER.COMMA_WITH_SPACE)}]`);
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
    this.printUserLotto(LOTTO_RESULT.printLottoStatistic(lottoCount));
  };

  printUserLotto(lottoArray) {
    for (let message of lottoArray) {
      Console.print(message);
    }
  }

  printProfit(profit) {
    Console.print(LOTTO_RESULT.printProfit(profit));
  };
}

export default LottoView;