const QUERIES = Object.freeze({
  PAYMENT_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const ANSWERS = Object.freeze({
  EMPTY_LINE: '',
  SEPARATOR: '---',
  LOTTOS_PURCHASED: '%s개를 구매했습니다.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  RESULT_START: '당첨 통계',
  RESULT_THIRD: '3개 일치 (5,000원) - %s개',
  RESULT_FOURTH: '4개 일치 (50,000원) - %s개',
  RESULT_FIFTH: '5개 일치 (1,500,000원) - %s개',
  RESULT_FIFTH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - %s개',
  RESULT_SIXTH: '6개 일치 (2,000,000,000원) - %s개',
  RESULT_TOTAL_YIELD: '총 수익률은 %s%입니다.',
});

export { QUERIES, ANSWERS };
