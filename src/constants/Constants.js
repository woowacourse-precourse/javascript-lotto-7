export const RANKINGS = {
  1: { PRIZE: 2000000000, MATCH: 6, BONUS: false },
  2: { PRIZE: 30000000, MATCH: 5, BONUS: true },
  3: { PRIZE: 1500000, MATCH: 5, BONUS: false },
  4: { PRIZE: 50000, MATCH: 4, BONUS: false },
  5: { PRIZE: 5000, MATCH: 3, BONUS: false },
};

export const RANKING = {
  FIRST: 1,
  LAST: Object.keys(RANKINGS).length,
};

export const MESSAGE = {
  WINNING_NUMBER_INPUT: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_INPUT: "\n보너스 번호를 입력해 주세요.\n",
  PURCHASE_AMOUNT_INPUT: "구입금액을 입력해 주세요.\n",
  PURCHASE_RESULT: (purchase) => `\n${purchase}개를 구매했습니다.`,
  LOTTO_NUMBER: (numbers) => `[${numbers}]`,
};

export const LOTTO = {
  TOTAL_NUMBERS: 6,
  TOTAL_BONUS_NUMBER: 1,
  ARRANGE_START: 1,
  ARRANGE_END: 45,
  PRICE: 1000,
};

export const ERROR = {
  TAG: "[ERROR]",
  TOTAL_NUMBER: `${LOTTO.TOTAL_NUMBERS}개의 숫자를 입력해주세요.`,
  NUMBER_ARRANGE: `${LOTTO.ARRANGE_START}~${LOTTO.ARRANGE_END} 사이의 값을 입력해주세요.`,
  INTEGER: "정수를 입력해주세요.",
  SAME: "중복된 숫자가 있습니다.",
  PURCHASE_AMOUNT_UNIT: `${LOTTO.PRICE}원 단위의 금액을 입력해주세요.`,
  MIN_PURCHASE: `한 장(${LOTTO.PRICE}) 이상만 구매 가능합니다.`,
};

export const STATISTICS_MESSAGE = {
  TITLE: "\n당첨 통계",
  THOUSAND_UNIT: 3,
  LINE: "---",
  1: (money, total) => `${RANKINGS[1].MATCH}개 일치 (${money}원) - ${total}개`,
  2: (money, total) =>
    `${RANKINGS[2].MATCH}개 일치, 보너스 볼 일치 (${money}원) - ${total}개`,
  3: (money, total) => `${RANKINGS[3].MATCH}개 일치 (${money}원) - ${total}개`,
  4: (money, total) => `${RANKINGS[4].MATCH}개 일치 (${money}원) - ${total}개`,
  5: (money, total) => `${RANKINGS[5].MATCH}개 일치 (${money}원) - ${total}개`,
  RETURN_RATE: (returnRate) => `총 수익률은 ${returnRate}%입니다.`,
};

export const SEPARATOR = ",";
export const DECIMAL_POINT = 2;
export const NONE = 0;
export const WHITE_SPACE = " ";
export const PERCENTAGE_FACTOR = 100;
