import deepFreeze from "./utils/deepFreeze.js";

const LOTTO_RANK = deepFreeze({
  fifth: { matchCount: 3, prize: 5_000 },
  fourth: { matchCount: 4, prize: 50_000 },
  third: { matchCount: 5, prize: 1_500_000 },
  second: { matchCount: 5, prize: 30_000_000, bonus: true },
  first: { matchCount: 6, prize: 2_000_000_000 },
});

export default LOTTO_RANK;
