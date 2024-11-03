export const LOTTO_MIN_PURCHASE_AMOUNT = 1000;

export const WINNING_NUMBER_DELIMITER = ",";
export const ERROR_MESSAGE_WINNING_NUMBER_SEPARATOR = "쉼표";

export const WINNING_NUMBER_MIN = 1;
export const WINNING_NUMBER_MAX = 45;
export const WINNING_NUMBER_COUNT = 6;

export const BONUS_NUMBER_COUNT = 1;

export const RUN_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: "로또 구입 금액을 입력해 주세요.\n",
});

export const VALIDATION_MESSAGES = Object.freeze({
  LOTTO_PURCHASE_AMOUNT: {
    NOT_DIVISIBLE_BY_MINIMUM_AMOUNT:
      "[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.",
    NOT_A_NUMBER: "[ERROR] 로또 구입 금액은 숫자로 입력해야 합니다.",
    MIN_LOTTO_PURCHASE_AMOUNT:
      "[ERROR] 로또 구입 금액은 1,000원 이상이어야 합니다.",
    NOT_EMPTY: "[ERROR] 로또 구입 금액은 비어있을 수 없습니다.",
  },
  WINNING_NUMBERS: {
    INVALID_SEPARATOR: `[ERROR] 당첨 번호는 ${ERROR_MESSAGE_WINNING_NUMBER_SEPARATOR}(${WINNING_NUMBER_DELIMITER})로 구분해야 합니다.`,
    NOT_A_NUMBER: "[ERROR] 당첨 번호는 숫자로 입력해야 합니다.",
    DUPLICATE_NUMBERS: "[ERROR] 당첨 번호는 중복될 수 없습니다.",
    OUT_OF_RANGE: `[ERROR] 당첨 번호는 ${WINNING_NUMBER_MIN}에서 ${WINNING_NUMBER_MAX} 사이의 숫자여야 합니다.`,
    INVALID_COUNT: `[ERROR] 당첨 번호는 ${WINNING_NUMBER_COUNT}개여야 합니다.`,
  },
  BONUS_NUMBER: {
    NOT_A_NUMBER: "[ERROR] 보너스 번호는 숫자로 입력해야 합니다.",
    DUPLICATE_WITH_WINNING:
      "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
    OUT_OF_RANGE: `[ERROR] 보너스 번호는 ${WINNING_NUMBER_MIN}에서 ${WINNING_NUMBER_MAX} 사이의 숫자여야 합니다.`,
    INVALID_COUNT: `[ERROR] 보너스 번호는 ${BONUS_NUMBER_COUNT}개만 입력해야 합니다.`,
  },
});
