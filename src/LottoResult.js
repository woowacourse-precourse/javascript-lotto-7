import { Console } from '@woowacourse/mission-utils';

class LottoResult {
  constructor() {
    this.matchCounts = { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0 };
    this.prizes = {
      '1등': 2000000000,
      '2등': 30000000,
      '3등': 1500000,
      '4등': 50000,
      '5등': 5000,
    };
  }

  countMatches(matches, hasBonus) {
    if (matches === 6) {
      this.matchCounts['1등']++;
    } else if (matches === 5 && hasBonus) {
      this.matchCounts['2등']++;
    } else if (matches === 5) {
      this.matchCounts['3등']++;
    } else if (matches === 4) {
      this.matchCounts['4등']++;
    } else if (matches === 3) {
      this.matchCounts['5등']++;
    }
  }
  calculateProfitRate(amount) {
    const totalPrize = Object.entries(this.matchCounts).reduce(
      (sum, [key, count]) => sum + this.prizes[key] * count,
      0
    );
    return ((totalPrize / amount) * 100).toFixed(1);
  }

  printStatistics() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.matchCounts['5등']}개\n4개 일치 (50,000원) - ${this.matchCounts['4등']}개\n5개 일치 (1,500,000원) - ${this.matchCounts['3등']}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchCounts['2등']}개\n6개 일치 (2,000,000,000원) - ${this.matchCounts['1등']}개`);
  }
}

export default LottoResult;
