export const ERROR_MESSAGES = Object.freeze({
  invalid_lotto_amount_type: "[ERROR] 로또 금액은 숫자로 입력해야합니다.",
  invalid_lotto_amount_divisible_1000:
    "[ERROR] 로또 금액은 1000원 단위의 양수여야 합니다",
  invalid_bonus_number_type: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  invalid_bonus_number_uniqueness:
    "[ERROR] 보너스 번호는 로또 당첨 번호 숫자와 겹치지 않아야 합니다.",
  invalid_bonus_number_range:
    "[ERROR] 보너스 번호는 1에서 45 사이의 양수여야 합니다.",

  invalid_lotto_number_type: "[ERROR] 로또 번호는 숫자여야 합니다.",
  invalid_lotto_number_count:
    "[ERROR] 로또 번호는 쉼표로 구분해서 6개여야 합니다.",

  invalid_lotto_number_uniqueness:
    "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  invalid_lotto_number_range:
    "[ERROR] 로또 번호는 1 ~ 45 사이의 양수여야 합니다.",
});
