const GAME_RULES = Object.freeze({
  CURRENCY_UNIT: 1000,
  MIN_LOTTO_NUMBER: 1, // 로또 번호의 최소값 (포함)
  MAX_LOTTO_NUMBER: 45, // 로또 번호의 최대값 (포함)
  LOTTO_NUMBER_COUNT: 6,
  DELIMITER: ',',
});

const PRIZE_CRITERIA = [
  { rank: 1, matchCount: 6, isBonusMatched: false, prize: 2000000000 }, // 1등: 6개 번호 일치
  { rank: 2, matchCount: 5, isBonusMatched: true, prize: 30000000 },    // 2등: 5개 번호 + 보너스 번호 일치
  { rank: 3, matchCount: 5, isBonusMatched: false, prize: 1500000 },    // 3등: 5개 번호 일치
  { rank: 4, matchCount: 4, isBonusMatched: false, prize: 50000 },      // 4등: 4개 번호 일치
  { rank: 5, matchCount: 3, isBonusMatched: false, prize: 5000 }        // 5등: 3개 번호 일치
];

export {
  GAME_RULES,
  PRIZE_CRITERIA,
};