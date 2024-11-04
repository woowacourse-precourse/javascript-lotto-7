export function countMatchedNums(results, matchedCount, hasBonusNum) {
  if (matchedCount === 3) results.MATCH_3++;
  else if (matchedCount === 4) results.MATCH_4++;
  else if (matchedCount === 5 && hasBonusNum) results.MATCH_5_BONUS++;
  else if (matchedCount === 5) results.MATCH_5++;
  else if (matchedCount === 6) results.MATCH_6++;
}
