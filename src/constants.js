export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT:
    "[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.",
  INVALID_WINNING_NUMBERS_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_WINNING_NUMBER_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  DUPLICATE_WINNING_NUMBER: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  INVALID_WINNING_NUMBER_RANGE:
    "[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.",
};

export const LOTTO_PRICE = 1000;

export const MESSAGES = {
  PURCHASE_AMOUNT_PROMPT: "구입 금액을 입력해 주세요.\n",
  LOTTO_PURCHASED: "개를 구매했습니다.",
  WINNING_NUMBER_PROMPT: "\n당첨 번호를 입력해 주세요.\n",
};

export const LOTTO_NUMBERS = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
};
