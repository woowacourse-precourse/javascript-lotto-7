export const prizeTable = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5_bonus': 30000000,
  6: 2000000000,
};

export default function calculateUserPrize(
  userLottos,
  winningLotto,
  bonusNumber,
  purchaseAmount,
) {
  const result = userLottos.reduce(
    (acc, lotto) => {
      const matchCount = lotto.matchCount(winningLotto);
      const key =
        matchCount === 5 && lotto.hasBonusNumber(bonusNumber)
          ? '5_bonus'
          : matchCount;

      if (prizeTable[key]) {
        acc.totalPrize += prizeTable[key];
        acc.results[key] = (acc.results[key] || 0) + 1;
      }
      return acc;
    },
    { totalPrize: 0, results: {} },
  );

  const yieldRate = (result.totalPrize / purchaseAmount) * 100;
  return { results: result.results, yieldRate: yieldRate.toFixed(1) };
}
