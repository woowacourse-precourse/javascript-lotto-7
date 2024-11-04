import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RESULT_MESSAGES } from '../constants/LottoSettings.js';

class OutputHandler {
  static printPurchaseQuantity(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`);
  }

  static printLottoTickets(lottoTickets) {
    lottoTickets.forEach(lottoEntry => {
      Console.print(`[${lottoEntry.join(', ')}]`);
    });
  }

  static printLottoResult(lottoResult) {
    Console.print('\n당첨 통계\n---');
    const result = Array.from(lottoResult)
      .map(([key, count]) => `${LOTTO_RESULT_MESSAGES.get(key)}${count}개`)
      .join('\n');

    Console.print(result);
  }

  static printProfitRate(profitRate) {
    Console.print(`\n총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputHandler;
