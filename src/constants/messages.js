import LOTTO from "./lotto.js";
import LOTTO_GAME from "./lottoGame.js";

export const ERORR_MESSAGE = {
  DUPLICATE: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  MAX_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
  NAN_ERROR: "[ERROR] 숫자를 입력해주세요.",
  NEGETIVE_NUM_ERROR: "[ERROR] 1 이상의 숫자를 입력해주세요.",
  INTEGER_ERROR: "[ERROR] 정수를 입력해주세요.",
  LIMIT_NUM_ERROR: "[ERROR] 45 이하의 숫자를 입력해주세요.",
  WINNING_LOTTO_LENGTH_ERROR: `[ERROR] 당첨 번호는 ${LOTTO.NUMBERS_COUNT}개를 입력해야 합니다.`,
  DUPLICATE_NUMBER_ERROR: "[ERROR] 당첨 번호에 중복된 숫자가 있습니다.",
  CONTAIN_ERROR: "[ERROR] 당첨 번호에 포함된 번호입니다.",
};

export const MESSAGES = {
  PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  WINNING_LOTTO: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "\n당첨 통계\n---",

  PURCHASE_RESULT_COUNT: (count) => `\n${count}개를 구매했습니다.`,

  PRIZE: (count) => {
    return [
      `3개 일치, (${LOTTO_GAME.WINNING_MONEY[4]}원) - ${count}개`,
      `4개 일치, (${LOTTO_GAME.WINNING_MONEY[3]}원) - ${count}개`,
      `5개 일치, (${LOTTO_GAME.WINNING_MONEY[2]}원) - ${count}개`,
      `5개 일치, 보너스 볼 일치 (${LOTTO_GAME.WINNING_MONEY[1]}원) - ${count}개`,
      `6개 일치, (${LOTTO_GAME.WINNING_MONEY[0]}원) - ${count}개`,
    ];
  },

  TOTAL_RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};
