import { Console } from '@woowacourse/mission-utils';

import OUTPUT_MESSAGES from './constant/output.js';

class Output {
  static #getProfitRateMessage(profitRate) {
    return `${OUTPUT_MESSAGES.PROFIT_RATE.HEAD}${profitRate.toFixed(1)}${
      OUTPUT_MESSAGES.PROFIT_RATE.TAIL
    }`;
  }

  static printProfitRate(profitRate) {
    const profitRateMessage = this.#getProfitRateMessage(profitRate);
    Console.print(profitRateMessage);
  }

  static printLottos(lottos) {
    Console.print(`\n${lottos.length}${OUTPUT_MESSAGES.QUANTITY}`);
    const lottoStrings = lottos
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');
    Console.print(lottoStrings);
  }
}

export default Output;
