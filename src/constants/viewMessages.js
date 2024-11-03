export const INPUT_MESSAGES = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGES = {
  PURCHASE_RESULT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_STATISTICS: '\n당첨 통계\n---',
  MATCH_RESULTS: {
    FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
    FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
    THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
    SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  },
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.\n`,
};
