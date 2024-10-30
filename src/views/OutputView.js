import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }
}

export default OutputView;
