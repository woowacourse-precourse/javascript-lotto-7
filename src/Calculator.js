const WINNINGS = {
  3: 5000,
  4: 50000,
  5: 1500000,
  "5+bonus": 30000000,
  6: 2000000000,
};

class Calculator {
  static calculateTotalWinnings(matchCounts) {
    return (
      matchCounts[3] * WINNINGS[3] +
      matchCounts[4] * WINNINGS[4] +
      matchCounts[5] * WINNINGS[5] +
      matchCounts["5+bonus"] *
        WINNINGS["5+bonus"] +
      matchCounts[6] * WINNINGS[6]
    );
  }

  static calculateReturnRate(
    totalWinnings,
    purchaseAmount
  ) {
    return (
      (totalWinnings / purchaseAmount) *
      100
    ).toFixed(1);
  }
}

export default Calculator;
