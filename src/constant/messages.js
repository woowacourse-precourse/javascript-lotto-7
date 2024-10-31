const MONEY_PER_MATCHING = {
  3: "5,000원",
  4: "50,000원",
  5: "1,500,000원",
  bonus: "30,000,000원",
  6: "2,000,000,000원",
};
export const MESSAGES = {
  INPUT: {
    LOTTO_AMOUNT: `구입금액을 입력해 주세요.\n`,
    WINNING_NUMBERS: `당첨 번호를 입력해 주세요.\n`,
    BONUS_NUMBER: `보너스 번호를 입력해 주세요.\n`,
  },
  OUTPUT: {
    WINNING_STATISTICS: `당첨 통계\n---\n`,
    lottoCount: (number) => {
      return `\n${number}개를 구매했습니다.\n`;
    },
    matchingCount: (count, bonusCount, total) => {
      if (bonusCount > 0) {
        return `${count}개 일치, 보너스 볼 일치 (${MONEY_PER_MATCHING.bonus}) - ${total}개`;
      }
      return `${count}개 일치 (${MONEY_PER_MATCHING[count]}) - ${total}개`;
    },
    ratioOfProfit: (ratio) => {
      return `총 수익률은 ${ratio}%입니다.`;
    },
  },
};
