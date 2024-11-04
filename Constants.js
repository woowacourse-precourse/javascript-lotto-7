export const USER_MESSAGES = {
  PURCHASE_MONEY: "구입금액을 입력해 주세요.",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

export const RESULT_MESSAGES = {
  FINALLY_RESULTS: "당첨 통계\n---",
}

export const LOTTO = {
  PRICE_PER_TICKET: 1000,
  NUMBERS_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const WINNING = {
  "6": 2000000000,
  "bonus5": 30000000,
  "5": 1500000,
  "4": 50000,
  "3": 5000,
};

export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위여야 합니다.",
  INVALID_AMOUNT_TYPE: "[ERROR] 구입 금액은 숫자로 입력해 주세요.",
  NEGATIVE_OR_ZERO_AMOUNT: "[ERROR] 구입 금액은 양수로 입력해 주세요.",
  INVALID_WINNING_NUMBERS_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  WINNING_NUMBER_RANGE: "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.",
  WINNING_NUMBER_DUPLICATE: "[ERROR] 로또 번호에는 중복된 숫자가 없어야 합니다.",
  INVALID_BONUS_NUMBER_COUNT: "[ERROR] 보너스 번호는 1개여야 합니다.",
  BONUS_NUMBER_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};