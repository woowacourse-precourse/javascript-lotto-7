// 메시지 상수
export const MESSAGES = {
  INPUT_PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  DISPLAY_RESULTS: "\n당첨 통계\n---",
};

// 로또 관련 상수
export const LOTTO = {
  PRICE_PER_TICKET: 1000,
  NUMBERS_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

// 게임 결과 상수
export const RESULT = {
  WINNING_PRIZE: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  },
};

// 오류 메시지 상수
export const ERROR_MESSAGES = {
  INVALID_MONEY_UNIT: "[ERROR] 구입 금액은 1,000원 단위여야 합니다.",
  INVALID_MONEY_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
  INVALID_MONEY_MINIMUM: "[ERROR] 구입 금액은 1,000원 이상이어야 합니다.",
  EMPTY_INPUT: "[ERROR] 입력 값이 비어있습니다.",

  INVALID_WINNING_NUMBERS_COUNT: "[ERROR] 당첨 번호는 6개여야 합니다.",
  WINNING_NUMBER_OUT_OF_RANGE:
    "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.",
  WINNING_NUMBER_DUPLICATE:
    "[ERROR] 당첨 번호에는 중복된 숫자가 없어야 합니다.",
  INVALID_WINNING_SEPARATOR: "[ERROR] 번호 구분자는 쉼표(,)만 유효합니다.",

  BONUS_NUMBER_OUT_OF_RANGE:
    "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
};
