export const WINNING_CONDITIONS_DESC = Object.freeze({
  MATCH_3: '3개 일치',
  MATCH_4: '4개 일치',
  MATCH_5: '5개 일치',
  MATCH_5_AND_BONUS: '5개 일치, 보너스 볼 일치',
  MATCH_6: '6개 일치',
});

export const LOTTO_CONFIG = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_COUNT: 6,
  LOTTO_PRICE: 1000,
  BONUS_NUMBERS_COUNT: 1,
  EARNING_RATE_PRECISION: 1,
  EARNING_RATE_MULTIPLIER: 100,
  WINNING_CONDITIONS: Object.freeze({
    3: Object.freeze({
      false: WINNING_CONDITIONS_DESC.MATCH_3,
      true: WINNING_CONDITIONS_DESC.MATCH_3,
    }),
    4: Object.freeze({
      false: WINNING_CONDITIONS_DESC.MATCH_4,
      true: WINNING_CONDITIONS_DESC.MATCH_4,
    }),
    5: Object.freeze({
      false: WINNING_CONDITIONS_DESC.MATCH_5,
      true: WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS,
    }),
    6: Object.freeze({
      false: WINNING_CONDITIONS_DESC.MATCH_6,
      true: WINNING_CONDITIONS_DESC.MATCH_6,
    }),
  }),
  WINNING_PRIZE_MAP: Object.freeze({
    [WINNING_CONDITIONS_DESC.MATCH_3]: 5000,
    [WINNING_CONDITIONS_DESC.MATCH_4]: 50000,
    [WINNING_CONDITIONS_DESC.MATCH_5]: 1500000,
    [WINNING_CONDITIONS_DESC.MATCH_5_AND_BONUS]: 30000000,
    [WINNING_CONDITIONS_DESC.MATCH_6]: 2000000000,
  }),
});
