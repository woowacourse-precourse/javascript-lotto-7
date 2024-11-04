export const RANKING_CONDITIONS = [
  { rank: 'first', matchCount: 6, hasBonus: false, prize: 2000000000 },
  { rank: 'second', matchCount: 5, hasBonus: true, prize: 30000000 },
  { rank: 'third', matchCount: 5, hasBonus: false, prize: 1500000 },
  { rank: 'fourth', matchCount: 4, hasBonus: false, prize: 50000 },
  { rank: 'fifth', matchCount: 3, hasBonus: false, prize: 5000 },
];

export const RESULT_INITIAL_STATE = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
};
