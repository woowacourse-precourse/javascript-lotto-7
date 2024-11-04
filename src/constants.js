const PROMPTS = Object.freeze({
  INPUT_USER_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_USER_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_USER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요\n',
});

const INFO = Object.freeze({
  USER_BUY: '개를 구매했습니다.',
  USER_WINNING_RESULT: '\n당첨 통계\n---',

  userThreeMatch(result) {
    return `3개 일치 (5,000원) - ${result}개`;
  },
  userFourMatch(result) {
    return `4개 일치 (50,000원) - ${result}개`;
  },
  userFiveMatch(result) {
    return `5개 일치 (1,500,000원) - ${result}개`;
  },
  userFiveBounusMatch(result) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result}개`;
  },
  userSixMatch(result) {
    return `6개 일치 (2,000,000,000원) - ${result}개`;
  },
  printTotalEarningsRate(rate) {
    return `총 수익률은 ${rate}% 입니다.`;
  },
});

const PRIZE = Object.freeze({
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIVE_MATCH: 1500000,
  FIVE_BONUS_MATCH: 30000000,
  SIX_MATCH: 2000000000,
});

export { PROMPTS, INFO, PRIZE };
