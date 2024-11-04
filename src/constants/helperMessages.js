const HELPER_MESSAGE = {
  getPrice: "구입금액을 입력해 주세요.\n",
  getWinningNumbers: "\n당첨 번호를 입력해 주세요.\n",
  getBonusBall: "\n보너스 번호를 입력해 주세요.\n",
};

const PRINT_MESSAGE = {
  lotto: {
    Count: "개를 구매했습니다.",
    Match: "\n당첨 통계\n---",
    rateOfReturn(rate) {
      return `총 수익률은 ${rate}%입니다.`;
    },
  },
};

export { HELPER_MESSAGE, PRINT_MESSAGE };
