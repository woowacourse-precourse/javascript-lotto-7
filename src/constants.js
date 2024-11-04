export const LOTTO = {
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_PER_TICKET: 6,
  PRIZE_MONEY: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000
  },
  WINNING_NUMBERS: {
    FIRST: 6,
    SECOND: 5,
    THIRD: 5,
    FOURTH: 4,
    FIFTH: 3
  }
};

export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 중복된 숫자는 입력할 수 없습니다.'
};
