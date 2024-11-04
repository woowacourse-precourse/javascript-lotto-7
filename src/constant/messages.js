import { PROFIT_PER_MATCHING_STRING } from "./profit.js";
export const MESSAGES = {
  input: {
    lotto_amount: `구입금액을 입력해 주세요.\n`,
    winning_numbers: `\n당첨 번호를 입력해 주세요.\n`,
    bonus_number: `\n보너스 번호를 입력해 주세요.\n`,
  },
  output: {
    winning_statistic: `\n당첨 통계\n---`,
    lottoCount: (number) => {
      return `\n${number}개를 구매했습니다.\n`;
    },
    matchingCount: (count, isBonus, total) => {
      if (isBonus) {
        return `${count}개 일치, 보너스 볼 일치 (${PROFIT_PER_MATCHING_STRING.bonus}) - ${total}개`;
      }
      return `${count}개 일치 (${PROFIT_PER_MATCHING_STRING[count]}) - ${total}개`;
    },
    ratioOfProfit: (ratio) => {
      return `총 수익률은 ${ratio}%입니다.`;
    },
  },
};
