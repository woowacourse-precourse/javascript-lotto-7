import { Console } from '@woowacourse/mission-utils';
import { PRICE } from '../constant/lotto.js';
import { WINNING_RATE } from '../constant/gameMessage.js';

const DASH = '-';

class PrintWinningStatistics {
  constructor(winningDetail, rate) {
    this.winningDetail = winningDetail;
    this.rate = rate;
  }

  printWinningStatistic() {
    Console.print(WINNING_RATE);
    Console.print(DASH.repeat(3));
  }

  printWinningDetail() {
    this.winningDetail.forEach((count, index) => {
      if (index === 3) {
        Console.print(
          `${index + 2}개 일치, 보너스 볼 일치 (${
            PRICE[index]
          }원) - ${count}개`,
        );
        return;
      }
      if (index === 4) {
        Console.print(`${index + 2}개 일치 (${PRICE[index]}원) - ${count}개`);
        return;
      }
      Console.print(`${index + 3}개 일치 (${PRICE[index]}원) - ${count}개`);
    });
  }

  printReturnRate() {
    Console.print(`총 수익률은 ${this.rate}%입니다.`);
  }
}

export default PrintWinningStatistics;
