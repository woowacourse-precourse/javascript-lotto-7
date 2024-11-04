export const INPUT_MESSAGE = {
  GET_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  GET_LOTTO_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  GET_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const ERROR_MESSAGE = {
  NOT_A_NUMBER: "[ERROR] : 문자가 아닌 숫자를 입력해주세요.\n",
  MINIMUM_PURCHASE_AMOUNT: "[ERROR] : 최소 구매 금액은 1000원 입니다.\n",
  PURCHASE_UNIT_1000: "[ERROR] : 구입 금액은 1000원 단위 입니다.\n",
  INVALID_NUMBER: "[ERROR] : 1-45 사이의 숫자를 입력해주세요.\n",
  SIX_NUMBERS_NEEDED: "[ERROR] : 6개의 번호를 입력해주세요.\n",
};

export const LOTTO_PRICE = 1000;

export const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

export const RESULT_MESSAGE = {
  FIRST: "6개 일치 (2,000,000,000원)",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  THIRD: "5개 일치 (1,500,000원)",
  FOURTH: "4개 일치 (50,000원)",
  FIFTH: "3개 일치 (5,000원)",
};
