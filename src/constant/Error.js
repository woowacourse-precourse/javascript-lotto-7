export const ERROR_MESSAGE = Object.freeze({
  NUMBER: Object.freeze({
    ERROR_NON_NUMBER: "[ERROR] 숫자만 입력이 가능합니다.",
    ERROR_SMALL_NUMBER: "[ERROR] 1000보다 작은 값은 입력할 수 없습니다.",
    ERROR_BIG_NUMBER: "[ERROR] 너무 큰 값입니다. 10억 이하로 입력하세요.",
    ERROR_DIVIDE_THOUSAND: "[ERROR] 1000으로 나누어 떨어져야 합니다.",
    ERROR_BONUS_DUP: "[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.",
    ERROR_BONUS_RANGE: "[ERROR] 보너스 번호는 1~45 사이로 입력해야 합니다.",
  }),
  LOTTO: Object.freeze({
    ERROR_LOTTO_NON_NUMBER: "[ERROR] 로또 번호는 숫자만 가능합니다.",
    ERROR_LOTTO_NULL: "[ERROR] 로또 번호는 빈 값이 들어올 수 없습니다.",
    ERROR_LOTTO_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    ERROR_LOTTO_DUP: "[ERROR] 로또 번호는 중복이 없어야 합니다.",
    ERROR_LOTTO_RANGE: "[ERROR] 로또 번호는 1~45 사이로 입력해야 합니다.",
  }),
});
