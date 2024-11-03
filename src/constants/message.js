export const MESSAGE = Object.freeze({
  INPUT_PURCHASE: '구입금액을 입력해 주세요.\n',
  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.\n`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
  THREE_MATCHES: '3개 일치 (5,000원) -',
  FOUR_MATCHES: '4개 일치 (50,000원) -',
  FIVE_MATCHES: '5개 일치 (1,500,000원) -',
  FIVE_BONUS_MATCHES: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  SIX_MATCHES: '6개 일치 (2,000,000,000원) -',
  RATE_OF_RETURN: (revenue) => `총 수익률은 ${revenue}입니다.`,
});
