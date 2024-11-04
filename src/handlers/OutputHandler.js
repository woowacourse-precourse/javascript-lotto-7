import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RESULT_MESSAGES, OUTPUT_MESSAGES } from '../constants/index.js';

class OutputHandler {
  static printPurchaseQuantity(quantity) {
    Console.print(OUTPUT_MESSAGES.purchase_quantity(quantity));
  }

  static printLottoTickets(lottoTickets) {
    lottoTickets.forEach(lottoEntry => {
      Console.print(`[${lottoEntry.join(', ')}]`);
    });
  }

  static printLottoResult(lottoResult) {
    Console.print(OUTPUT_MESSAGES.lotto_result_header);
    const result = Array.from(lottoResult)
      .map(([key, count]) => `${LOTTO_RESULT_MESSAGES.get(key)}${count}개`)
      .join('\n');

    Console.print(result);
  }

  static printProfitRate(profitRate) {
    Console.print(OUTPUT_MESSAGES.profit_rate(profitRate));
  }
}

export default OutputHandler;
