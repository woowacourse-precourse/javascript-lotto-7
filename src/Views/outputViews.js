import { Console } from '@woowacourse/mission-utils';
import { matchCounts } from '../Models/winningStatisticsUtils.js';

const printCountPurchaseAmount = (purchaseCount) => {
  Console.print(`\n${purchaseCount}개를 구매했습니다.`);
};

const printLottoList = (lottoCount, lottoList) => {
  const totalLottoList = lottoList;
  for (let i = 0; i < lottoCount; i += 1) {
    Console.print(`[${totalLottoList[i].join(', ')}]`);
  }

  Console.print('\n');
};

const printWinningAmount = () => {
  Console.print(
    `\n당첨 통계\n` +
      `---\n` +
      `3개 일치 (5,000원) - ${matchCounts.threeMatches}개\n` +
      `4개 일치 (50,000원) - ${matchCounts.fourMatches}개\n` +
      `5개 일치 (1,500,000원) - ${matchCounts.fiveMatches}개\n` +
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts.fiveMatchesAndBonus}개\n` +
      `6개 일치 (2,000,000,000원) - ${matchCounts.sixMatches}개`,
  );
};

const printRateOfReturn = (rateOfReturn) => {
  Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
};
export { printCountPurchaseAmount, printLottoList, printRateOfReturn, printWinningAmount };
