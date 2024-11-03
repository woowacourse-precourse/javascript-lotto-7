import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULE } from "../constants/rule.js";

export const buyOneLotto = () =>
  Random.pickUniqueNumbersInRange(LOTTO_RULE.MIN_NUMBER, LOTTO_RULE.MAX_NUMBER, 6);

export const getRankType = (matchCount, isBonusMatch) => {
  if (matchCount === 3) return "threeMatch";
  if (matchCount === 4) return "fourMatch";
  if (matchCount === 5 && !isBonusMatch) return "fiveMatch";
  if (matchCount === 5 && isBonusMatch) return "fiveMatchAndBonus";
  if (matchCount === 6) return "allMatch";
  return null;
};
