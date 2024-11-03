import { MATCH_COUNTS_BY_RANK } from '../constants/constraints.js';

export const initializeMatchCounts = () => ({
  [MATCH_COUNTS_BY_RANK.FIRST]: 0,
  [MATCH_COUNTS_BY_RANK.SECOND]: 0,
  [MATCH_COUNTS_BY_RANK.THIRD]: 0,
  [MATCH_COUNTS_BY_RANK.FOURTH]: 0,
  [MATCH_COUNTS_BY_RANK.FIFTH]: 0,
});

export const updateMatchCount = (
  matchCounts,
  matchCount,
  isBonusNumberMatched,
) => {
  const addMatchCnt = (key) => matchCounts[key]++;
  const updateMatchCount = {
    [MATCH_COUNTS_BY_RANK.FIRST]: () => addMatchCnt(MATCH_COUNTS_BY_RANK.FIRST),
    [MATCH_COUNTS_BY_RANK.SECOND]: () => bonusHandlers[isBonusNumberMatched](),
    [MATCH_COUNTS_BY_RANK.FOURTH]: () =>
      addMatchCnt(MATCH_COUNTS_BY_RANK.FOURTH),
    [MATCH_COUNTS_BY_RANK.FIFTH]: () => addMatchCnt(MATCH_COUNTS_BY_RANK.FIFTH),
  };
  const update = updateMatchCount[matchCount];
  if (update) update();
};

const bonusHandlers = {
  true: () => matchCounts[MATCH_COUNTS_BY_RANK.THIRD]++,
  false: () => matchCounts[MATCH_COUNTS_BY_RANK.SECOND]++,
};
