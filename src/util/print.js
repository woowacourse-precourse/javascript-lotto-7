import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO, OUTPUT_MESSAGE } from '../constant/index.js';
import formatCurrency from './formatCurrency.js';

function lottoList(lottoList) {
  lottoList.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });
}

function winningStatistics() {
  Console.print(OUTPUT_MESSAGE.RESULT_STATISTICS);
  LOTTO.STATISTICS_ORDER.forEach((key) => {
    const label =
      key === '5+bonus' ? '5개 일치, 보너스 볼 일치' : `${key}개 일치`;
    Console.print(
      `${label} (${formatCurrency(LOTTO.WINNING_AMOUNT[key])}) - ${
        Lotto.matchedCount[key]
      }개`,
    );
  });
}

function profitRate(purchaseAmount, totalProfit) {
  const fixedRate = ((totalProfit / purchaseAmount) * 100).toFixed(1);
  Console.print(OUTPUT_MESSAGE.TOTAL_PROFIT_RATE(Number(fixedRate)));
}

export default { lottoList, winningStatistics, profitRate };
