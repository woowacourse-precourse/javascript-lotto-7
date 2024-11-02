const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: "입력값이 없습니다.",
  NEGATIVE_NUMBER: "입력값에 음수가 포함되어 있습니다.",
  ZERO_VALUE: "입력값이 0입니다.",
  INVALID_SEPARATOR: "유효하지 않은 구분자를 사용했습니다.",
  NON_NUMERIC: "입력값이 숫자 타입이 아닙니다.",
  OUT_OF_RANGE: "로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  INCORRECT_LENGTH: "로또 번호는 6개여야 합니다.",
  DUPLICATE_FOUND: "로또 번호에 중복된 숫자가 있습니다.",
  NOT_MULTIPLE_OF_THOUSAND: "구매 금액은 1,000원 단위여야 합니다.",
});
export default ERROR_MESSAGES;
