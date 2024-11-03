export const config = Object.freeze({
  lottoConfig: {
    LOTTO_AMOUNT: 1000,
    MAX_PURCHASE_AMOUNT: 100000,
    NUMBER_COUNT: 6,
    NUMBER_RANGE: {
      START_NUMBER: 1,
      END_NUMBER: 45,
    },
    WINNING_RULES: [
      {
        MATCH_COUNT: 3,
        PRIZE: '5,000',
        HAS_BONUS_NUMBER_MATCHED: false,
        BONUS_NUMBER_MATCHED_PRIZE: 0,
      },
      {
        MATCH_COUNT: 4,
        PRIZE: '50,000',
        HAS_BONUS_NUMBER_MATCHED: false,
        BONUS_NUMBER_MATCHED_PRIZE: 0,
      },
      {
        MATCH_COUNT: 5,
        PRIZE: '1,500,000',
        HAS_BONUS_NUMBER_MATCHED: true,
        BONUS_NUMBER_MATCHED_PRIZE: '30,000,000',
      },
      {
        MATCH_COUNT: 6,
        PRIZE: '2,000,000,000',
        HAS_BONUS_NUMBER_MATCHED: false,
        BONUS_NUMBER_MATCHED_PRIZE: 0,
      }
    ]
  }
});
