import { prettyNumber } from '../utils/prettyNumber.js';

export const OUTPUT_MESSAGE = Object({
  amount: (amount) => `${amount}개를 구매했습니다.`,
  statistics: '\n당첨 통계\n---',
  statisticsDetail: ({ prize, matchingCount, lotteryPrize, winningCount }) =>
    `${matchingCount}개 일치${
      prize === 'second' ? ', 보너스 볼 일치' : ''
    } (${prettyNumber(lotteryPrize)}원) - ${winningCount}개`,
  lotteryYield: (rate) => `총 수익률은 ${rate}%입니다.`,
});
