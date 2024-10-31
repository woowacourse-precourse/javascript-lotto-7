import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printLotto(lottos) {
    const lottoCount = lottos.length;
    this.print(`${lottoCount}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  print(message) {
    Console.print(message);
  }
}
