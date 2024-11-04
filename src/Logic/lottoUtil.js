import { PRIZES } from "../UserIO/output.js";

export function calculateStatistics(
  purchasedLottos,
  winningNumbers,
  bonusNumber
) {
  const matchCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

  purchasedLottos.forEach((lotto) => {
    const matchCount = lotto.matchCount(winningNumbers);
    const hasBonus = lotto.hasBonusNumber(bonusNumber);

    if (matchCount === 6) matchCounts[6]++;
    else if (matchCount === 5 && hasBonus) matchCounts[5.5]++;
    else if (matchCount === 5) matchCounts[5]++;
    else if (matchCount === 4) matchCounts[4]++;
    else if (matchCount === 3) matchCounts[3]++;
  });

  return matchCounts;
}

export function calculateProfitRate(matchCounts, purchaseAmount) {
  const totalPrize = Object.keys(matchCounts).reduce((acc, key) => {
    return acc + matchCounts[key] * PRIZES[key];
  }, 0);

  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
}
