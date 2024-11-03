import { Console } from '@woowacourse/mission-utils';
import { matchCount } from '../Model/winningStatisticsUtils.js';

export class Output {
  printPurchaseCount = (purchaseCount) => {
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  };

  printLottoList = (purchaseCount, lottoList) => {
    const totalLottoList = lottoList;

    for (let i = 0; i < purchaseCount; i += 1) {
      Console.print(`[${totalLottoList[i].join(', ')}]`);
    }
  };

  printWinningAmount = () => {
    Console.print(
      `\n당첨 통계\n` +
        `---\n` +
        `3개 일치 (5,000원) - ${matchCount.threeMatch}개\n` +
        `4개 일치 (50,000원) - ${matchCount.fourMatch}개\n` +
        `5개 일치 (1,500,000원) - ${matchCount.fiveMatch}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCount.fiveAndBonusMatch}개\n` +
        `6개 일치 (2,000,000,000원) - ${matchCount.sixMatch}개`,
    );
  };

  printRateOfReturn = (rateOfReturn) => {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  };
}
