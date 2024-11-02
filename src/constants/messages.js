export const PROMPT = {
  PRICE_INPUT: '구매금액을 입력해 주세요.\n',
  QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
  WINNING_NUMBER_INPUT: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_INPUT: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_OUTPUT: `\n당첨 통계\n---`
};

export const OUTPUT = {
  FIFTH_WINNING: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH_WINNING: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRH_WINNING: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND_WINNING: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST_WINNING: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  TOTAL_EARNINGS_RATE: (rate) => `총 수익률은 ${rate}%입니다.`
};
