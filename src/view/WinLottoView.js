// WinLottoView.js

import { Console } from "@woowacourse/mission-utils";

export default class WinLottoView {
  printWinningStatistics(results) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+bonus"]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}
