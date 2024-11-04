export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASED_LOTTO: (ticketNumber) => `\n${ticketNumber}개를 구매했습니다.`,
  RESULT_HEDAER: "\n당첨 통계\n---",
  WINNING_STATISTICS: (stats) =>
    `
  3개 일치 (5,000원) - ${stats[5] || 0}개
  4개 일치 (50,000원) - ${stats[4] || 0}개
  5개 일치 (1,500,000원) - ${stats[3] || 0}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats[2] || 0}개
  6개 일치 (2,000,000,000원) - ${stats[1] || 0}개
  `,
});
