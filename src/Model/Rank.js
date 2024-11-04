const RANKS = Object.freeze({
  SIX_MATCH: { key: "sixMatch", prize: 2_000_000_000 },
  FIVE_MATCH_WITH_BONUS: { key: "fiveMatchWithBonus", prize: 30_000_000 },
  FIVE_MATCH: { key: "fiveMatch", prize: 1_500_000 },
  FOUR_MATCH: { key: "fourMatch", prize: 50_000 },
  THREE_MATCH: { key: "threeMatch", prize: 5_000 },
  NO_MATCH: { key: "noMatch", prize: 0 },
});

export default RANKS;
