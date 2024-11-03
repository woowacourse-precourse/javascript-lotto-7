const ERRORS = {
  PURCHASE_AMOUNT_EMPTY: '[ERROR] 구입 금액을 입력해야 합니다.',
  PURCHASE_AMOUNT_NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  PURCHASE_AMOUNT_NEGATIVE:
    '[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.',
  PURCHASE_AMOUNT_INVALID_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',

  WINNING_NUMBERS_EMPTY: '[ERROR] 당첨 번호를 입력해야 합니다.',
  WINNING_NUMBERS_NOT_NUMBER:
    '[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.',
  WINNING_NUMBERS_DUPLICATE:
    '[ERROR] 당첨 번호에 중복된 숫자가 포함되어 있습니다.',
  WINNING_NUMBERS_INVALID_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',

  BONUS_NUMBER_EMPTY: '[ERROR] 보너스 번호를 입력해야 합니다.',
  BONUS_NUMBER_OUT_OF_RANGE:
    '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
  BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
};

export default ERRORS;
