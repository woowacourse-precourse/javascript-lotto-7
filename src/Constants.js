class Constants {
  static LOTTO_PRICE = 1000;
  static LOTTO_NUMBER_COUNT = 6;
  static LOTTO_NUMBER_MIN = 1;
  static LOTTO_NUMBER_MAX = 45;
  static DELIMITER = ",";

  static ERROR_MESSAGES = {
    PURCHASE_AMOUNT_ERROR: "[ERROR] 구매 금액이 올바르지 않습니다.",
    LOTTO_NUMBER_COUNT_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_NUMBER_ERROR: "[ERROR] 중복된 숫자가 포함되었습니다.",
    NATURAL_NUMBER_ERROR: "[ERROR] 자연수가 아닌 값이 포함되어 있습니다.",
    INVALID_NUMBER_RANGE_ERROR: "[ERROR] 번호는 1에서 45 사이여야 합니다.",
    THOUSAND_UNIT_ERROR: "[ERROR] 1000원 단위가 아닌 값이 입력되었습니다.",
  };

  static INPUT_MESSAGES = {
    PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  };

  static get PURCHASE_COUNT_MESSAGES() {
    return "개를 구매했습니다.";
  }
}

export default Constants;
