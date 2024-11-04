import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Statistics {
  updateAmountArray(amountArray, matchCount, isBonusMatch) {
    if (matchCount === 6) {
      amountArray[4]++;
    } else if (matchCount === 5 && isBonusMatch) {
      amountArray[3]++;
    } else if (matchCount === 5) {
      amountArray[2]++;
    } else if (matchCount === 4) {
      amountArray[1]++;
    } else if (matchCount === 3) {
      amountArray[0]++;
    }
  }

  displayStatistics(count, sumAmount, amountArray) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${amountArray[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${amountArray[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${amountArray[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${amountArray[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${amountArray[4]}개`);

    const rateOfReturn = (sumAmount / (count * 1000)) * 100;
    const formattedString = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1 }).format(rateOfReturn);
    Console.print(`총 수익률은 ${formattedString}%입니다.\n`);
  }
}

export default Statistics;