import { WINNINGS } from "./Constants";

class Calculator {
  static calculateMatch(
    lottoNumbers,
    winningNumbers,
    bonusNumber
  ) {
    const matchCount = lottoNumbers.filter(
      (num) => winningNumbers.includes(num)
    ).length;
    const hasBonus =
      lottoNumbers.includes(bonusNumber);

    // 매칭 결과 문자열 반환
    if (matchCount === 6) return "6개 일치";
    if (matchCount === 5 && hasBonus)
      return "5개 일치, 보너스 볼 일치";
    if (matchCount === 5) return "5개 일치";
    if (matchCount === 4) return "4개 일치";
    if (matchCount === 3) return "3개 일치";
    return null;
  }

  static calculateTotalWinnings(matchCounts) {
    // 총 당첨 금액 계산
    return Object.keys(WINNINGS).reduce(
      (total, key) => {
        return (
          total +
          (matchCounts[key] || 0) * WINNINGS[key]
        );
      },
      0
    );
  }

  static calculateReturnRate(
    totalWinnings,
    purchaseAmount
  ) {
    const rate =
      (totalWinnings / purchaseAmount) * 100;
    return parseFloat(rate.toFixed(1)); // 소수점 첫째 자리까지 반환하고 숫자로 변환
  }
}

export default Calculator;
