import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/outputMessages.js";

export class OutputView {
  OutputBoughtNumber(boughtNumber) {
    Console.print(`${boughtNumber}` + OUTPUT_MESSAGES.HOW_BOUGHT_NUMBER);
  }

  OutputLottoNumberArray(lottoNumberArray) {
    lottoNumberArray.map(Array => Console.print(Array))
  }

  OutputPrizeStatisticsMessage() {
    Console.print(OUTPUT_MESSAGES.PRIZE_STATISTICS);
  }

  OutputPrizeStatistics(prizeStatisticsArray) {
    Console.print(`3개 일치 (5,000원) - ${prizeStatisticsArray[0].matchedThree}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeStatisticsArray[1].matchedFour}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeStatisticsArray[2].matchedFive}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeStatisticsArray[3].matchedFiveAndBonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeStatisticsArray[4].matchedSix}개`);
  }

  OutputPrizeProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}
