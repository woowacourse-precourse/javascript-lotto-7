export const GAME_CONSTANTS = {
  PRICE: 1000,
  NUMBER_COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const ERROR_MESSAGES = {
  INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
  DUPLICATED_NUMBER: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  INVALID_PURCHASE_AMOUNT: "[ERROR] 구매 금액은 1,000원 단위여야 합니다.",
  INVALID_NUMBER_FORMAT: "[ERROR] 로또 번호는 숫자여야 합니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};

export const LOTTO_RANK = {
  FIRST: {
    matchCount: 6,
    prize: 2_000_000_000,
    message: "6개 일치 (2,000,000,000원)",
    hasBonus: false,
  },
  SECOND: {
    matchCount: 5,
    prize: 30_000_000,
    message: "5개 일치, 보너스 볼 일치 (30,000,000원)",
    hasBonus: true,
  },
  THIRD: {
    matchCount: 5,
    prize: 1_500_000,
    message: "5개 일치 (1,500,000원)",
    hasBonus: false,
  },
  FOURTH: {
    matchCount: 4,
    prize: 50_000,
    message: "4개 일치 (50,000원)",
    hasBonus: false,
  },
  FIFTH: {
    matchCount: 3,
    prize: 5_000,
    message: "3개 일치 (5,000원)",
    hasBonus: false,
  },
};
