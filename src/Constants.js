class Constants {
  static LOTTO_PRICE = 1000;
  static LOTTO_NUMBER_COUNT = 6;
  static LOTTO_NUMBER_MIN = 1;
  static LOTTO_NUMBER_MAX = 45;
  static DELIMITER = ",";
  static MINIMUM_RANK = 5;
  static DECIMAL_PLACES = 2;

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

  static INITIAL_RANK_RESULTS = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
  }

  static RANKINGS = {
    1 : { matches: 6},
    2 : { matches: 5, BonusMatch: true },
    3 : { matches: 5, BonusMatch: false },
    4 : { matches: 4},
    5 : { matches: 3},
  };

  static RANKING_PRIZES = {
    1: 2000000000,   // 1등 상금
    2: 30000000,      // 2등 상금
    3: 1500000,       // 3등 상금
    4: 50000,         // 4등 상금
    5: 5000           // 5등 상금
  };
}

export default Constants;
