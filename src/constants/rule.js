export const LOTTO_WIN_RANK = {
  allMatch: { string: "6개 일치", prize: 2000000000, matchCount: 6, requiresBonus: false },
  fiveMatchAndBonus: {
    string: "5개 일치, 보너스 볼 일치",
    prize: 30000000,
    matchCount: 5,
    requiresBonus: true,
  },
  fiveMatch: { string: "5개 일치", prize: 1500000, matchCount: 5, requiresBonus: false },
  fourMatch: { string: "4개 일치", prize: 50000, matchCount: 4, requiresBonus: false },
  threeMatch: { string: "3개 일치", prize: 5000, matchCount: 3, requiresBonus: false },
};

export const LOTTO_RULE = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
};
