export const PRIZE_RANKS = Object.freeze({
  MATCH_6: 'match6',
  MATCH_5_PLUS_BONUS: 'match5PlusBonus',
  MATCH_5: 'match5',
  MATCH_4: 'match4',
  MATCH_3: 'match3',
});

export const PRIZES = Object.freeze({
  [PRIZE_RANKS.MATCH_3]: 5000,
  [PRIZE_RANKS.MATCH_4]: 50000,
  [PRIZE_RANKS.MATCH_5]: 1500000,
  [PRIZE_RANKS.MATCH_5_PLUS_BONUS]: 30000000,
  [PRIZE_RANKS.MATCH_6]: 2000000000,
});
