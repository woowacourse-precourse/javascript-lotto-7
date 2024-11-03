const PRINT_MESSAGE = {
  input: {
    purchaseAmount: "구입금액을 입력해 주세요.\n",
    winningNumbers: "\n당첨 번호를 입력해 주세요.\n",
    bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  },
  output: {
    purchaseCount(count) {
      return `\n${count}개를 구매했습니다.`;
    },
    statisticsHeader: "\n당첨 통계\n---",
    matchResult: {
      three(count) {
        return `3개 일치 (5,000원) - ${count}개`;
      },
      four(count) {
        return `4개 일치 (50,000원) - ${count}개`;
      },
      five(count) {
        return `5개 일치 (1,500,000원) - ${count}개`;
      },
      fiveBonus(count) {
        return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
      },
      six(count) {
        return `6개 일치 (2,000,000,000원) - ${count}개`;
      },
    },
    profitRate(rate) {
      return `총 수익률은 ${rate}%입니다.`;
    },
  },
};

export default PRINT_MESSAGE;