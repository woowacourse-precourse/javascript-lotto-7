import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import { generateSummary } from '../utils/index.js';

class Output {
  static printLottos(lottos, numOfLottos) {
    let lottoString = `\n${LOTTO_MESSAGE.PRINT_LOTTO_COUNT(numOfLottos)}\n`;
    lottos.forEach((ticket) => {
      lottoString += `${LOTTO_MESSAGE.START_MARK + ticket.lottoNumbers.join(', ') + LOTTO_MESSAGE.END_MARK}\n`;
    });
    Console.print(lottoString);
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
