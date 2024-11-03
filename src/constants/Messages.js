const MESSAGES = {
  PURCHASE_AMOUNT_PROMPT: '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBERS_PROMPT: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER_PROMPT: '보너스 번호를 입력해 주세요.\n',

  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(', ')}]`,

  WINNING_STATS: '당첨 통계',
  MATCH_3: '3개 일치 (5,000원) - ',
  MATCH_4: '4개 일치 (50,000원) - ',
  MATCH_5: '5개 일치 (1,500,000원) - ',
  MATCH_5_WITH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_6: '6개 일치 (2,000,000,000원) - ',
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export default MESSAGES;
