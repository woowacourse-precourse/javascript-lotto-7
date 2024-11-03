import Lotto from '../models/Lotto.js';

class LottoController {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.lottos = [];
    this.resultCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    this.profitRate = 0.0;
  }

  generateLottos() {
    const count = Math.floor(this.purchaseAmount / 1000);
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      this.lottos.push(lotto);
    }
  }

  getLottos() {
    return this.lottos.map((lotto) => lotto.getNumbers());
  }

  // 당첨 결과를 계산하는 메서드
  calculateResult(winningNumbers, bonusNumber) {
    // 초기화
    this.resultCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };

    this.lottos.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => winningNumbers.includes(num)).length;
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) {
        this.resultCounts[6]++;
      } else if (matchCount === 5 && hasBonus) {
        this.resultCounts['5+bonus']++;
      } else if (matchCount === 5) {
        this.resultCounts[5]++;
      } else if (matchCount === 4) {
        this.resultCounts[4]++;
      } else if (matchCount === 3) {
        this.resultCounts[3]++;
      }
    });

    return this.resultCounts;
  }

  // 수익률을 계산하는 메서드
  calculateProfitRate(purchaseAmount) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5+bonus': 30000000,
      6: 2000000000,
    };

    let totalPrize = 0;
    for (const [rank, count] of Object.entries(this.resultCounts)) {
      totalPrize += count * prizeMoney[rank];
    }

    this.profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return this.profitRate;
  }

  // 결과 가져오기
  getResultCounts() {
    return this.resultCounts;
  }

  getProfitRate() {
    return this.profitRate;
  }
}

export default LottoController;
