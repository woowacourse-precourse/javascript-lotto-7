import { getRank } from "./rank.js";
export function generateResultStatistics(lottos, winningNumbers, bonusNumber) {
  const results = {
    1: { count: 0, prize: 2000000000 },
    2: { count: 0, prize: 30000000 },
    3: { count: 0, prize: 1500000 },
    4: { count: 0, prize: 50000 },
    5: { count: 0, prize: 5000 },
  };

  lottos.forEach((lotto) => {
    const matchCount = lotto
      .getNumbers()
      .filter((num) => winningNumbers.includes(num)).length;
    const hasBonus = lotto.getNumbers().includes(bonusNumber);
    const rankInfo = getRank(matchCount, hasBonus);
    if (rankInfo) {
      results[rankInfo.rank].count += 1;
    }
  });

  return results;
}

// 총 당첨 금액을 계산하는 함수
export function calculateTotalPrize(results) {
  return Object.values(results).reduce((total, { count, prize }) => {
    return total + count * prize;
  }, 0);
}
