const INPUT_MESSAGE = {
  LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
  LOTTO_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  LOTTO_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};
const OUTPUT_MESSAGE = {
  QUANTITY: '\n{number}개를 구매했습니다.',
  WINNING_PLACE: {
    INTRO: '\n당첨 통계\n---',
    FIFTH_PLACE: '3개 일치 (5,000원) - {number}개',
    FOURTH_PLACE: '4개 일치 (50,000원) - {number}개',
    THIRD_PLACE: '5개 일치 (1,500,000원) - {number}개',
    SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - {number}개',
    FIRST_PLACE: '6개 일치 (2,000,000,000원) - {number}개',
  },
  PROFIT: '총 수익률은 {number}%입니다.',
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE };
