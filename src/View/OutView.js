import { Console } from '@woowacourse/mission-utils';
import { PRICE_INFO } from '../Constants.js';

export default class OutputView {
  printUserLotto(lottos) {
    this.print(`\n${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      this.print(`[${lotto.join(', ')}]`);
    });
  }

  printWinningDetails(winningCount) {
    this.print(`\n당첨 통계`);
    this.print(`---`);

    Object.entries(winningCount).forEach(([key, count]) => {
      const priceInfoValue = PRICE_INFO[key];

      let matchString = `${priceInfoValue.match}개 일치`;
      if (key === '2nd') {
        matchString += ', 보너스 볼 일치';
      }

      this.print(`${matchString} (${priceInfoValue.price.toLocaleString('ko-KR')}원) - ${count}개`);
    });
  }

  printWinningRate(rate) {
    this.print(`총 수익률은 ${rate}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}
