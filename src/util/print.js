import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';
import { LOTTO, OUTPUT_MESSAGE } from '../constant';
import formatCurrency from './formatCurrency';

function lottoList(lottoList) {
  lottoList.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });
}

function winningStatistics() {
  Console.print(OUTPUT_MESSAGE.RESULT_STATISTICS);
  Object.entries(Lotto.matchedCount).forEach(([key, count]) => {
    const label =
      key === '5+bonus' ? '5개 일치, 보너스 볼 일치' : `${key}개 일치`;
    Console.print(
      `${label} (${formatCurrency(LOTTO.WINNING_AMOUNT[key])}) - ${count}개`,
    );
  });
}

export default { lottoList, winningStatistics };
