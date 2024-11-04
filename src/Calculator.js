// Calculator.js
import { WINNINGS } from "./Constants.js";

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

    if (matchCount === 6) return "6개 일치";
    if (matchCount === 5 && hasBonus)
      return "5개 일치, 보너스 볼 일치";
    if (matchCount === 5) return "5개 일치";
    if (matchCount === 4) return "4개 일치";
    if (matchCount === 3) return "3개 일치";
    return null;
  }

  static calculateTotalWinnings(matchCounts) {
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
    return rate.toFixed(1);
  }
}

export default Calculator;
