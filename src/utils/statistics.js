export function calculateStatistics(
  purchaseNumbers,
  winningNumbers,
  bonusNumber
) {
  const statistics = [
    { count: 3, prize: '5,000원', winnerCount: 0, totalPrize: 0 },
    { count: 4, prize: '50,000원', winnerCount: 0, totalPrize: 0 },
    {
      count: 5,
      prize: '1,500,000원',
      winnerCount: 0,
      totalPrize: 0,
      isBonusMatch: false,
    },
    {
      count: 5,
      prize: '30,000,000원',
      winnerCount: 0,
      totalPrize: 0,
      isBonusMatch: true,
    },
    { count: 6, prize: '2,000,000,000원', winnerCount: 0, totalPrize: 0 },
  ];

  purchaseNumbers.forEach((purchased) => {
    const matches = getMatchCount(purchased, winningNumbers);
    const hasBonusMatch = purchased.includes(bonusNumber);

    updateStatistics(statistics, matches, hasBonusMatch);
  });

  return statistics;
}

function getMatchCount(purchased, winningNumbers) {
  return purchased.filter((num) => winningNumbers.includes(num)).length;
}

function updateStatistics(statistics, matches, hasBonusMatch) {
  const prizeMapping = [
    { count: 3, prize: 5000, isBonusMatch: false },
    { count: 4, prize: 50000, isBonusMatch: false },
    { count: 5, prize: 1500000, isBonusMatch: false },
    { count: 5, prize: 30000000, isBonusMatch: true },
    { count: 6, prize: 2000000000, isBonusMatch: false },
  ];

  if (matches >= 3 && matches <= 6) {
    if (matches === 5 && hasBonusMatch) {
      statistics[1].winnerCount++;
      statistics[1].totalPrize += prizeMapping[3].prize;
    } else {
      statistics[matches - 3].winnerCount++;
      statistics[matches - 3].totalPrize += prizeMapping[matches - 3].prize;
    }
  }
}

export default calculateStatistics;
