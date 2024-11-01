import { Console } from '@woowacourse/mission-utils';
import { ERROR_PREFIX } from '../constant/constants.js';

export default class OutputView {
  printError(message) {
    Console.print(`${ERROR_PREFIX} ${message}`);
  }

  printLottoPurchaseHistory(lottos) {
    const result = lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    Console.print(result);
  }
}
