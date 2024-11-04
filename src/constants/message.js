const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  BUYING_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_RESULT_TITLE: '\n당첨 통계\n---',
  PERCENTAGE: (percent) => `총 수익률은 ${percent}%입니다.`
});

const RESULT = Object.freeze({
  THREE_MATCH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOUR_MATCH: (count) => `4개 일치 (50,000원) - ${count}개`,
  FIVE_MATCH: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  FIVE_MATCH_WITH_BONUS: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  SIX_MATCH: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
});
const MESSAGE = Object.freeze({ INPUT_MESSAGE, OUTPUT_MESSAGE, RESULT });

export default MESSAGE;
