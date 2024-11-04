const DOMAIN_ERRORS = Object.freeze({
  LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
  CHANGE_EXIST: "[ERROR] 로또 구매 금액은 1000원 단위여야 합니다.",
});

const INPLEMENTED_ERROR = "Method not implemented";

export { DOMAIN_ERRORS, INPLEMENTED_ERROR };
