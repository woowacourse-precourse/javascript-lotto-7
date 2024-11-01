const ERROR_PREFIX = "[ERROR] ";

const ERROR_MESSAGES = Object.freeze({
  price: {
    MUST_BE_DIVISIBLE_BY_1000:
      "구입 금액은 1,000원 단위로 나누어 떨어져야 합니다.",
    NOT_ENTERED: "구입 금액이 입력되지 않았습니다.",
    MUST_BE_NUMERIC: "구입 금액은 무조건 숫자여야 합니다.",
  },
  winningNumber: {
    OUT_OF_RANGE: "로또 번호의 숫자 범위는 1~45입니다.",
    DUPLICATE_NUMBER:
      "당첨 번호 추첨 시 중복되지 않는 숫자 6개를 뽑아야 합니다.",
  },
  bonusNumber: {
    OUT_OF_RANGE: "보너스 번호의 숫자 범위는 1~45입니다.",
    DUPLICATE_NUMBER:
      "보너스 번호 추첨 시 중복되지 않는 숫자 1개를 뽑아야 합니다.",
  },
});

function throwError(message) {
  throw new Error(ERROR_PREFIX + message);
}

export { ERROR_PREFIX, ERROR_MESSAGES, throwError };
