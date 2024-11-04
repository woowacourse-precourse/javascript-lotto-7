import { INFO_MESSAGE, PRIZE_TABLE } from "../libs/constants.js";
import { calculateProfitRate } from "../libs/helpers.js";
import { printResult } from "../libs/utils.js";

export function printWinningStatus(results, amount) {
  printResult(INFO_MESSAGE.PRIZE_STATUS_TITLE);
  PRIZE_TABLE.forEach(({ matchCount, bonusMatch, prize, description }) => {
    const count = results.filter(
      (result) => result.matchCount === matchCount && (!bonusMatch || result.bonusMatch)
    ).length;
    printResult(`${description} (${prize.toLocaleString()}원) - ${count}개`);
  });

  const profitRate = calculateProfitRate(results, amount);
  printResult(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
}
