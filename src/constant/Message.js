export const MESSAGE = Object.freeze({
  INPUT: Object.freeze({
    PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
    WINNING_LOTTO: "\n당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  }),
  OUTPUT: Object.freeze({
    PURCAHSE_LOTTO: "개를 구매했습니다.",
    RESULT_HEADER: "\n당첨 통계\n---",
    RESULT: Object.freeze({
      FIRST: "6개 일치 (2,000,000,000원)",
      SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      THIRD: "5개 일치 (1,500,000원)",
      FOURTH: "4개 일치 (50,000원)",
      FIFTH: "3개 일치 (5,000원)",
    }),
    RESULT_PROFIT_RATE: "총 수익률은 ",
    RESULT_FOOTER: "%입니다.",
  }),
});
