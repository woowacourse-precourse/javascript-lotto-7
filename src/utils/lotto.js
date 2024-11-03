import { Random } from "@woowacourse/mission-utils";

export const buyOneLotto = () => Random.pickUniqueNumbersInRange(1, 45, 6);

export const getRankType = (matchCount, isBonusMatch) => {
  if (matchCount === 3) return "threeMatch";
  if (matchCount === 4) return "fourMatch";
  if (matchCount === 5 && !isBonusMatch) return "fiveMatch";
  if (matchCount === 5 && isBonusMatch) return "fiveMatchAndBonus";
  if (matchCount === 6) return "allMatch";
  return null;
};
