const LOTTO_INFORMATION = [
  { rank: 5, targetCount: 3, prize: 5000 },
  { rank: 4, targetCount: 4, prize: 50000 },
  { rank: 3, targetCount: 5, prize: 1500000 },
  { rank: 2, targetCount: 5, hasBonus: true, prize: 30000000 },
  { rank: 1, targetCount: 6, prize: 2000000000 },
];

export const findInformation = (rank) => {
  return LOTTO_STANDARD.find((standard) => standard.rank === rank);
};
