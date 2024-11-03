import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printUserLotto(lottos) {
    this.print(`\n${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printWinningDetails(winningDetails) {
    Object.entries(winningDetails).forEach(([key, value]) => {
      if (key === '2nd') {
        this.print(`${value.match}개 일치, 보너스 볼 일치 (${value.price.toLocaleString('ko-KR')}원) - ${value.count}개`);
      } else {
        this.print(`${value.match}개 일치 (${value.price.toLocaleString('ko-KR')}원) - ${value.count}개`);
      }
    });
  }

  printWinningRate(rate) {
    this.print(`총 수익률은 ${rate}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}
