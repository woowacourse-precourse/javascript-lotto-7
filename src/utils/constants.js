export const LOTTO = {
  PRICE: 1000,
  LENGTH: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const PRIZE = {
  FIRST: { MATCH: 6, AMOUNT: 2000000000 },
  SECOND: { MATCH: 5, BONUS: true, AMOUNT: 30000000 },
  THIRD: { MATCH: 5, AMOUNT: 1500000 },
  FOURTH: { MATCH: 4, AMOUNT: 50000 },
  FIFTH: { MATCH: 3, AMOUNT: 5000 },
};

export const MESSAGE = {
  PURCHASE_MESSAGE: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS_MESSAGE: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER_MESSAGE: "\n보너스 번호를 입력해 주세요.\n",
};

export const ERROR_MESSAGE = {
  INVALID_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1000원 단위여야 합니다.",
  INVALID_NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_WINNING_NUMBERS:
    "[ERROR] 당첨 번호는 쉼표로 구분된 6개의 숫자여야 합니다.",
  INVALID_NUMBER_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  INVALID_BONUS_NUMBER:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE_NUMBERS: "[ERROR] 중복된 숫자는 사용할 수 없습니다.",
};
