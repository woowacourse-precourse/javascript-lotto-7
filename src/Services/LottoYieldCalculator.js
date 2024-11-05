import RANKS from "../Model/Rank.js";

class LottoYieldCalculator {
  calculate(winningResult, validatedPrice) {
    // 총 당첨금 계산
    const totalWinnings = Object.values(RANKS).reduce((acc, rank) => {
      const count = winningResult[rank.key] || 0; // 당첨 개수 (기본값 0)
      return acc + count * rank.prize;
    }, 0);

    // 수익률 계산 (소수점 둘째 자리에서 반올림)
    const yieldPercentage = ((totalWinnings / validatedPrice) * 100).toFixed(1);
    return yieldPercentage;
  }
}

export default LottoYieldCalculator;
