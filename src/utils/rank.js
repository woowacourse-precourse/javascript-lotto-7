export function getRank(matchCount, hasBonus) {
  if (matchCount === 6) return { rank: 1, prize: 2000000000 };
  if (matchCount === 5 && hasBonus) return { rank: 2, prize: 30000000 };
  if (matchCount === 5) return { rank: 3, prize: 1500000 };
  if (matchCount === 4) return { rank: 4, prize: 50000 };
  if (matchCount === 3) return { rank: 5, prize: 5000 };
  return null; // 당첨되지 않은 경우
}
