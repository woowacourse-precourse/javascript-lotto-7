import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

class OutputView {
  printMessage(message) {
    Console.print(message);
  }

  printTickets(amount) {
    Console.print(OUTPUT_MESSAGES.purchaseAmount(amount));
  }

  printLottos(lottos) {
    const lottoss = lottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');
    Console.print(`${lottoss}\n`);
  }
}

export default OutputView;
