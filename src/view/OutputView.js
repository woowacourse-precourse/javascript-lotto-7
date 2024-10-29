import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printEmptyLine() {
    Console.print('');
  }
  printLottoCount(lottoCount) {
    this.printEmptyLine();
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });

    this.printEmptyLine();
  }
}

export default OutputView;
