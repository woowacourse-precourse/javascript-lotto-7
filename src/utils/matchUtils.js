import { MATCH_COUNTS_BY_RANK } from '../constants/constraints.js';

export const initializeMatchCounts = () => ({
  [MATCH_COUNTS_BY_RANK.FIRST]: 0,
  [MATCH_COUNTS_BY_RANK.SECOND]: 0,
  [MATCH_COUNTS_BY_RANK.THIRD]: 0,
  [MATCH_COUNTS_BY_RANK.FOURTH]: 0,
  [MATCH_COUNTS_BY_RANK.FIFTH]: 0,
});

const incrementMatchCount = (matchCounts, key) => matchCounts[key]++;
const bonusHandlers = (matchCounts, isBonusNumberMatched) =>
  ({
    true: () => matchCounts[MATCH_COUNTS_BY_RANK.SECOND]++,
    false: () => matchCounts[MATCH_COUNTS_BY_RANK.THIRD]++,
  })[isBonusNumberMatched]();
const updateMatchActions = (matchCounts, isBonusNumberMatched) => ({
  [MATCH_COUNTS_BY_RANK.FIRST]: () =>
    incrementMatchCount(matchCounts, MATCH_COUNTS_BY_RANK.FIRST),
  [MATCH_COUNTS_BY_RANK.SECOND]: () =>
    bonusHandlers(matchCounts, isBonusNumberMatched),
  [MATCH_COUNTS_BY_RANK.FOURTH]: () =>
    incrementMatchCount(matchCounts, MATCH_COUNTS_BY_RANK.FOURTH),
  [MATCH_COUNTS_BY_RANK.FIFTH]: () =>
    incrementMatchCount(matchCounts, MATCH_COUNTS_BY_RANK.FIFTH),
});

export const updateMatchCount = (
  matchCounts,
  matchCount,
  isBonusNumberMatched,
) => {
  const update = updateMatchActions(matchCounts, isBonusNumberMatched)[
    matchCount
  ];
  if (update) update();
};
