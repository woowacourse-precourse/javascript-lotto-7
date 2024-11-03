import {
  LOTTO_PRIZES,
  MATCH_COUNTS_BY_RANK,
} from '../constants/constraints.js';

const determineSecondPrize = (isBonusNumberMatched) => {
  if (isBonusNumberMatched) {
    return LOTTO_PRIZES.SECOND;
  }
  return LOTTO_PRIZES.THIRD;
};

export const calculatePrize = (matchCount, isBonusNumberMatched) => {
  const prizeCriteria = {
    [MATCH_COUNTS_BY_RANK.FIRST]: () => LOTTO_PRIZES.FIRST,
    [MATCH_COUNTS_BY_RANK.SECOND]: () =>
      determineSecondPrize(isBonusNumberMatched),
    [MATCH_COUNTS_BY_RANK.FOURTH]: () => LOTTO_PRIZES.FOURTH,
    [MATCH_COUNTS_BY_RANK.FIFTH]: () => LOTTO_PRIZES.FIFTH,
  };
  const prizeAmount = prizeCriteria[matchCount];
  if (!prizeAmount) {
    return 0;
  }
  return prizeAmount();
};
