import { Console } from '@woowacourse/mission-utils';

class OutputView {
  showPurchasedLotto(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
  }
}
export default OutputView;
