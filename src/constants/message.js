const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  BUYING_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  THREE_MATCH: '3개 일치 (5,000원) - ',
  FOUR_MATCH: '4개 일치 (50,000원) - ',
  FIVE_MATCH: '5개 일치 (1,500,000원) - ',
  FIVE_MATCH_WITH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_MATCH: '6개 일치 (2,000,000,000원) - ',
});

const MESSAGE = Object.freeze({ INPUT_MESSAGE, OUTPUT_MESSAGE });

export default MESSAGE;
