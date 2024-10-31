export const ERROR_MESSAGE = Object.freeze({
  PURCHASE_MONEY: Object.freeze({
    ERROR_NON_NUMBER: "[ERROR] 숫자만 입력이 가능합니다.",
    ERROR_SMALL_NUMBER: "[ERROR] 1000보다 작은 값은 입력할 수 없습니다.",
    ERROR_DIVIDE_THOUSAND: "[ERROR] 1000으로 나누어 떨어져야 합니다.",
  }),
  LOTTO: Object.freeze({
    ERROR_LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    ERROR_LOTTO_DUP: "[ERROR] 로또 번호는 중복이 없어야 합니다.",
  }),
});
