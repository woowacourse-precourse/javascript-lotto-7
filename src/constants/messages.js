export const PROMPT_MESSAGES = Object.freeze({
  INPUT: {
    PURCHACE_PRICE: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  },
  OUTPUT: {
    PURCHACE_QUANTITY: '개를 구매했습니다.',
    WINNING_RESULT: '당첨 통계',
  },
});

export const LOTTO_MESSAGES = Object.freeze({
  HEADER: '\n당첨 통계\n---',
  THREE_MATCH: '3개 일치 (5,000원) - ',
  FOUR_MATCH: '4개 일치 (50,000원) - ',
  FIVE_MATCH: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS_MATCH: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_MATCH: '6개 일치 (2,000,000,000원) - ',
  RATE_OF_REVENUE: '총 수익률은 ',
});
