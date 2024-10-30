export const PRIZE = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  false: 0,
};

export const MESSAGE = {
  WINNING_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  WINNING_BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
};

export const LOTTO = {
  TOTAL_NUMBERS: 6,
  TOTAL_BONUS_NUMBER: 1,
  ARRANGE_START: 1,
  ARRANGE_END: 45,
};

export const ERROR_TAG = "[ERROR]";

export const ERROR_MESSAGE = {
  TOTAL_NUMBER: `${LOTTO.TOTAL_NUMBERS}개의 숫자를 입력해주세요.`,
  NUMBER_ARRANGE: `${LOTTO.ARRANGE_START}~${LOTTO.ARRANGE_END} 사이의 값을 입력해주세요.`,
  INTEGER: "정수를 입력해주세요.",
  SAME: "중복된 숫자가 있습니다.",

  get(type) {
    return `${ERROR_TAG} ${this[type]}`;
  },
};
