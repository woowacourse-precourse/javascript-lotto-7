const ERROR_MESSAGE = Object.freeze({
  lotto: {
    INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
    DUPLICATE_NUMBER: "[ERROR] 로또 번호에 중복된 숫자가 있을 수 없습니다.",
    INVALID_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  },
  purchase: {
    NOT_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
    INVALID_UNIT: "[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.",
    NOT_POSITIVE: "[ERROR] 구입 금액은 0보다 커야 합니다.",
  },
  winningNumbers: {
    INVALID_FORMAT: "[ERROR] 쉼표(,)로 구분된 6개의 숫자를 입력해 주세요.",
    NOT_NUMBERS: "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.",
    DUPLICATE: "[ERROR] 당첨 번호에 중복된 숫자가 있을 수 없습니다.",
  },
  bonus: {
    NOT_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
    INVALID_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
    DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  },
});

export default  ERROR_MESSAGE;