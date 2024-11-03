export const OUTPUT_MESSAGES = Object({
  winningStatistics: '\n당첨 통계\n---',
  lottoBuy: (count) => `${count}개를 구매했습니다`,

  THIRD_PRIZE: (accord) => `3개 일치 (5,000원) - ${accord}개`,
  FOURTH_PRIZE: (accord) => `4개 일치 (50,000원) - ${accord}개`,
  FIFTH_PRIZE: (accord) => `5개 일치 (50,000원) - ${accord}개`,
  BONUS_PRIZE: (accord) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${accord}개`,
  SIXTH_PRIZE: (accord) => `6개 일치 (2,000,000,000원) - ${accord}개`,
  totalReturnMessages: (totalReturn) => `총 수익률은 ${totalReturn}%입니다.`,
});
