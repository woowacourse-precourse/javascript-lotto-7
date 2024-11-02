import { Console } from '@woowacourse/mission-utils';

class Output {
  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => this.#printLotto(lotto));
    Console.print('');
  }

  #printLotto(lotto) {
    Console.print('[' + lotto.getNumbers().join(', ') + ']');
  }
}

export default Output;
