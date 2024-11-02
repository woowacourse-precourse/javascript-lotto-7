import { Console } from '@woowacourse/mission-utils';

class Output {
  static printLottos(lottos) {
    lottos.forEach((ticket) => Console.print(ticket.lottoNumbers));
    Console.print('\n');
  }
}
export default Output;
