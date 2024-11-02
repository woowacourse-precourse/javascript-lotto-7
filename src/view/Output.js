import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../constants/LottoMessage.js';

class Output {
  static printLottos(lottos) {
    lottos.forEach((ticket) => Console.print(ticket.lottoNumbers));
    Console.print('\n');
  }

  static printNumOfLotto(number) {
    Console.print(`\n${LOTTO_MESSAGE.PRINT_LOTTO_COUNT(number)}`);
  }
}
export default Output;
