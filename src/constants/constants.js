export const ERROR_MESSAGES = {
  INVALID_AMOUNT: "\n[ERROR] 구입 금액은 숫자로만 이루어져야 합니다.\n",
  INVALID_AMOUNT_UNIT: "\n[ERROR] 구입 금액은 1,000원 단위여야 합니다.\n",
  MINIMUM_AMOUNT: "\n[ERROR] 최소 구입 금액은 1,000원입니다.\n",
  WINNING_NUMBERS_FORMAT:
    "\n[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.\n",
  WINNING_NUMBERS_NAN: "\n[ERROR] 당첨 번호는 숫자로만 이루어져야 합니다.\n",
  WINNING_NUMBERS_COUNT: "\n[ERROR] 당첨 번호는 6개여야 합니다.\n",
  WINNING_NUMBERS_DUPLICATE: "\n[ERROR] 당첨 번호는 중복될 수 없습니다.\n",
  WINNING_NUMBERS_RANGE:
    "\n[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.\n",
  BONUS_NUMBER_NAN: "\n[ERROR] 보너스 번호는 숫자여야 합니다.\n",
  BONUS_NUMBER_COUNT: "\n[ERROR] 보너스 번호는 1개여야 합니다.\n",
  BONUS_NUMBER_DUPLICATE:
    "\n[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.\n",
  BONUS_NUMBER_RANGE:
    "\n[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.\n",
};

export const PROMPTS = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const LOTTO = {
  PRICE: 1000,
  NUMBER_RANGE: { MIN: 1, MAX: 45 },
  NUMBER_COUNT: 6,
  MATCH_FOR_BONUS: 5,
  REWARDS: {
    FIRST: { MATCH_COUNT: 6, AMOUNT: 2000000000 },
    SECOND: { MATCH_COUNT: 5, BONUS_MATCH: true, AMOUNT: 30000000 },
    THIRD: { MATCH_COUNT: 5, BONUS_MATCH: false, AMOUNT: 1500000 },
    FOURTH: { MATCH_COUNT: 4, AMOUNT: 50000 },
    FIFTH: { MATCH_COUNT: 3, AMOUNT: 5000 },
  },
};

export const MESSAGES = {
  PURCHASED_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBERS: (numbers) => `[${numbers.join(", ")}]`,
  RESULT_STATISTICS: "\n당첨 통계\n---",
  MATCH_COUNT: (match, amount, count) =>
    `${match}개 일치 (${amount.toLocaleString()}원) - ${count}개`,
  BONUS_MATCH_COUNT: (amount, count) =>
    `5개 일치, 보너스 볼 일치 (${amount.toLocaleString()}원) - ${count}개`,
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate.toFixed(1)}%입니다.`,
};
