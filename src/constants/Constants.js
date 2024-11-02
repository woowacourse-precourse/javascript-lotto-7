export const REWARD = {
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIFTH_MATCH: 1500000,
  SIXTH_MATCH: 200000000,
  FIFTH_BONUS_MATCH: 30000000,
};
export const WINNING_INDEX = {
  THREE_MATCH: 0,
  FOUR_MATCH: 1,
  FIFTH_MATCH: 2,
  SIXTH_MATCH: 3,
  FIFTH_BONUS_MATCH: 4,
};

export const ERROR_MESSAGE = {
  PRICE_NUMBER_ERROR: "[ERROR] 로또 구입 금액은 숫자만 입력할 수 있습니다.",
  PRICE_NEGATIVE_ERROR: "[ERROR] 로또 구입 금액은 양수로 입력해 주세요.",
  PRICE_DIVISIBLE_ERROR:
    "[ERROR] 로또 구입 금액은 1000원 단위로만 입력 가능합니다.",
  ANSWER_NUMBER_ERROR: "[ERROR] 로또 번호는 숫자만 입력할 수 있습니다.",
  ANSWER_RANGE_ERROR: "[ERROR] 로또 번호는 1~45 사이 숫자만 가능합니다.",
  ANSWER_COUNT_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  ANSWER_DUPLICATE_ERROR: "[ERROR] 로또 번호는 중복된 숫자를 가질 수 없습니다.",
  BONUS_NUMBER_ERROR: "[ERROR] 보너스 번호는 숫자만 입력할 수 있습니다.",
  BONUS_RANGE_ERROR: "[ERROR] 보너스 번호는 1~45 사이 숫자만 가능합니다.",
  BONUS_INANSWER_ERROR:
    "[ERROR] 해당 보너스 번호는 이미 로또 번호에 존재합니다.",
};
