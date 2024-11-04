// 통계 및 수익률 계산 클래스
class Calculator {
  constructor() {
    // 당첨 금액 설정
    this.PRIZE_MONEY = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5_bonus": 30000000,
      6: 2000000000,
    };
  }

  // 당첨 통계 계산
  calculateWinningStats(results) {
    const stats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, "5_bonus": 0, 6: 0 };

    results.forEach(({ matches, hasBonus }) => {
      if (matches === 5 && hasBonus) {
        stats["5_bonus"] += 1;
        return;
      }
      stats[matches] += 1;
    });

    return stats;
  }

  // 수익률 계산
  calculateReturnRate(results, money) {
    let totalPrizeMoney = 0;
    results.forEach(({ matches }) => {
      if (this.PRIZE_MONEY[matches]) {
        totalPrizeMoney += this.PRIZE_MONEY[matches];
      }
    });

    return Math.round((totalPrizeMoney / money) * 1000) / 10;
  }
}

export default Calculator;
