const GAME_RULES = Object.freeze({
  CURRENCY_UNIT: 1000,
  MIN_LOTTO_NUMBER: 1, // 로또 번호의 최소값 (포함)
  MAX_LOTTO_NUMBER: 45, // 로또 번호의 최대값 (포함)
  LOTTO_NUMBER_COUNT: 6,
  DELIMITER: ',',
  MAX_RETRIES: 1000,
});

const PRIZE_CRITERIA = Object.freeze({
  RANK1: {
    rank: 1,
    matchCount: 6,
    isBonusMatched: false,
    prize: 2000000000,
    description: '6개 일치 (2,000,000,000원)',
  },
  RANK2: {
    rank: 2,
    matchCount: 5,
    isBonusMatched: true,
    prize: 30000000,
    description: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  },
  RANK3: {
    rank: 3,
    matchCount: 5,
    isBonusMatched: false,
    prize: 1500000,
    description: '5개 일치 (1,500,000원)',
  },
  RANK4: {
    rank: 4,
    matchCount: 4,
    isBonusMatched: false,
    prize: 50000,
    description: '4개 일치 (50,000원)',
  },
  RANK5: {
    rank: 5,
    matchCount: 3,
    isBonusMatched: false,
    prize: 5000,
    description: '3개 일치 (5,000원)',
  },
});

export { GAME_RULES, PRIZE_CRITERIA };
