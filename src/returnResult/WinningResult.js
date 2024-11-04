export default function winningResult(lottoBundle, prize, bonus) {
  return lottoBundle.map((lotto) => {
    const matchCount = lotto.filter((num) => prize.includes(num)).length;
    const isBonusMatch = lotto.includes(bonus[0]);

    if (matchCount === 6) return 1; // 1등
    if (matchCount === 5 && isBonusMatch) return 2; // 2등
    if (matchCount === 5) return 3; // 3등
    if (matchCount === 4) return 4; // 4등
    if (matchCount === 3) return 5; // 5등
    return 0; // 꽝
  });
}
