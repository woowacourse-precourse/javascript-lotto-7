import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import { generateSummary } from '../utils/index.js';

class Output {
  static printLottos(lottos) {
    lottos.forEach((ticket) => Console.print(ticket.lottoNumbers));
    Console.print('\n');
  }

  static printNumOfLotto(number) {
    Console.print(`\n${LOTTO_MESSAGE.PRINT_LOTTO_COUNT(number)}`);
  }

  static printResultSummary(result, profitRate) {
    Console.print(LOTTO_MESSAGE.RESULT_HEADER);
    const summary = generateSummary(Object.freeze({ ...result }));
    Console.print(summary);
    Console.print(LOTTO_MESSAGE.RESULT_YEILD(profitRate)); // 총 수익률
  }
}
export default Output;
