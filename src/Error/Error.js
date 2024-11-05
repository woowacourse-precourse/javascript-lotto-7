const ERROR_PREFIX = "[ERROR] ";

const ERROR_MESSAGES = Object.freeze({
  price: {
    MUST_BE_DIVISIBLE_BY_1000: `구입 금액은 1,000원 단위로 나누어 떨어져야 합니다.`,
    NOT_ENTERED: `구입 금액이 입력되지 않았습니다.`,
    MUST_BE_NUMERIC: `구입 금액은 무조건 숫자여야 합니다.`,
    ONLY_POSITIVE_ALLOWED: `음수는 입력할 수 없습니다.`,
    ZERO_MONEY_NOT_ALLOWED: `0원은 입력할 수 없습니다.`,
  },
  lotteryNumber: {
    ONLY_6_NUMBERS: `숫자는 6개 입력되어야 합니다.`,
    ONLY_NUMBER_ALLOWED: `입력된 값이 숫자가 아닙니다.`,
    ONLY_NUMBER_IN_RANGE_ALLOWED: `입력된 숫자가 1-45 밖에 있습니다.`,
    DUPLICATED_NUMBER: `입력된 수 중 중복이 존재합니다.`,
    INVALID_ARRAY: `올바르지 않은 포맷입니다.`,
  },
});

function throwError(message) {
  throw new Error(ERROR_PREFIX + message);
}

export { ERROR_PREFIX, ERROR_MESSAGES, throwError };
