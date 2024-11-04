import { Console } from '@woowacourse/mission-utils';
import { match, prize } from '../constants/lottoResult.js';

class Output {
  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => this.#printLotto(lotto));
    Console.print('');
  }

  printWinning(result) {
    Console.print('\n당첨 통계\n---');

    const winLotto = result.getWinLotto();
    winLotto.forEach((count, key) => this.#printMatch(key, count));
  }

  printProfitRate(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  #printLotto(lotto) {
    Console.print('[' + lotto.getNumbers().join(', ') + ']');
  }

  #printMatch(key, count) {
    Console.print(`${match[key]} ${prize[key]} - ${count}개`);
  }
}

export default Output;
