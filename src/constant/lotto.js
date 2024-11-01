const LOTTO_RULE = Object.freeze({
  AMOUNT_UNIT: 1000,
  LOTTO_NUMBER_RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LOTTO_NUMBER_LENGTH: 6,
  MATCH_COUNT: {
    FIRST: 6,
    SECOND_OR_THIRD: 5,
    FOURTH: 4,
    FIFTH: 3,
  },
  RANK: {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5,
    NONE: 0,
  },
  REWARD: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
    NONE: 0,
  },
});

export default LOTTO_RULE;
