const APPLICATION_ERRORS = Object.freeze({
  EMPTY: "[ERROR] 입력값이 없습니다.",
  NOT_A_NUMBER: "[ERROR] 숫자가 아닙니다.",
  NOT_INTEGER: "[ERROR] 정수가 아닙니다.",
  NOT_POSITIVE: "[ERROR] 0 이상의 숫자를 입력해주세요.",
});

const DOMAIN_ERRORS = Object.freeze({
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
  CHANGE_EXIST: "[ERROR] 로또 구매 금액은 1000원 단위여야 합니다.",
  DUPLICATE_BONUS: "[ERROR] 보너스 번호는 로또 번호와 겹칠 수 없습니다.",
});

const INPLEMENTED_ERROR = "Method not implemented";

export { APPLICATION_ERRORS, DOMAIN_ERRORS, INPLEMENTED_ERROR };
