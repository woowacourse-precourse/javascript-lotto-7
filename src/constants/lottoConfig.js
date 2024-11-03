export const LOTTO_CONFIG = Object.freeze({
  START: 1,
  END: 45,
  NOT_DUPLICATED_NUMBER: 6,
  ROUND_TO_FIRST_DECIMAL: 1,
  THREE_MATCH: 3,
  FOUR_MATCH: 4,
  FIVE_MATCH: 5,
  FIVE_AND_BONUS_MATCH: 5.5,
  SIX_MATCH: 6,
  // 3개, 4개, 5개, 5개 + 보너스, 6개 일치하는 개수를 저장하는 객체
  PRIZE_MONEY: {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  },
});
