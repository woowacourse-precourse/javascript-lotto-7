const outputMessages = {
  INFO_PREFIX: (cnt) => `${cnt}개를 구매했습니다.\n`,
  STATS_PREFIX: '당첨 통계\n---\n',
  ROI_MESSAGE: (roi) => `총 수익률은 ${roi}%입니다.`,
  BONUS_MESSAGE: ', 보너스 볼 일치',
  MATCH_COUNT_MESSAGE: (match, bonus, prizeMoney, winning) => `${match}개 일치${bonus}` + ` (${prizeMoney}원) - ${winning}개\n`,
};

export default outputMessages;
