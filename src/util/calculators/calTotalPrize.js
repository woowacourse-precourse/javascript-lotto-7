import { MagicNumber } from '../../constants/MagicNumber.js';

export function calTotalPrize(matchCounts) {
  const prizeMapping = {
    MATCH_3: MagicNumber.MATCH_3_PRIZE,
    MATCH_4: MagicNumber.MATCH_4_PRIZE,
    MATCH_5: MagicNumber.MATCH_5_PRIZE,
    MATCH_5_BONUS: MagicNumber.MATCH_5_BONUS_PRIZE,
    MATCH_6: MagicNumber.MATCH_6_PRIZE,
  };

  return Object.entries(matchCounts).reduce((totalPrize, [key, count]) => {
    return totalPrize + prizeMapping[key] * count;
  }, 0);
}
