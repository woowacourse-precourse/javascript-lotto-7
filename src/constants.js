export const LOTTO = {
  PRICE: 1000,
  LENGTH: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const PRIZE = {
  FIRST: {
    MATCH_COUNT: 6,
    BONUS_MATCH: false,
    AMOUNT: 2000000000,
    MESSAGE: '6개 일치 (2,000,000,000원)',
  },
  SECOND: {
    MATCH_COUNT: 5,
    BONUS_MATCH: true,
    AMOUNT: 30000000,
    MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  },
  THIRD: {
    MATCH_COUNT: 5,
    BONUS_MATCH: false,
    AMOUNT: 1500000,
    MESSAGE: '5개 일치 (1,500,000원)',
  },
  FOURTH: {
    MATCH_COUNT: 4,
    BONUS_MATCH: false,
    AMOUNT: 50000,
    MESSAGE: '4개 일치 (50,000원)',
  },
  FIFTH: {
    MATCH_COUNT: 3,
    BONUS_MATCH: false,
    AMOUNT: 5000,
    MESSAGE: '3개 일치 (5,000원)',
  },
};

export const ERROR_MESSAGE = {
  INVALID_PURCHASE_AMOUNT: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
  INVALID_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  INVALID_NUMBER_FORMAT: '[ERROR] 숫자만 입력 가능합니다.',
  DUPLICATE_BONUS: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};
