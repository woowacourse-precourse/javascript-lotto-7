import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES, STATISTIC_LABEL } from '../constants/messages.js';

class OutputView {
  printMessage(message) {
    Console.print(message);
  }

  printTickets(amount) {
    Console.print(OUTPUT_MESSAGES.purchase_amount(amount));
  }

  printLottos(lottos) {
    const lottoNumbers = lottos
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');
    Console.print(`${lottoNumbers}\n`);
  }

  printStatistics(statistics) {
    Console.print(OUTPUT_MESSAGES.statics_title);

    Object.entries(statistics).forEach(([prizeKey, value]) => {
      const key = STATISTIC_LABEL[prizeKey];

      Console.print(OUTPUT_MESSAGES.total_statics(key, value));
    });
  }

  printProfitRatio(profitRatio) {
    Console.print(OUTPUT_MESSAGES.total_profit_ratio(profitRatio));
  }
}

export default OutputView;
