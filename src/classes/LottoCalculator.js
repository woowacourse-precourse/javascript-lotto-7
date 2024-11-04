import { LOTTO_PRIZE, LOTTO_RANK } from '../constant.js';

class LottoCalculator {
  constructor(purchasePrice) {
    this.purchasePrice = purchasePrice;
    this.lottoResults = Array(5).fill(0);
  }

  calculateLottoPrize() {
    return this.lottoResults.reduce((sum, count, index) => {
      sum += count * LOTTO_PRIZE[index].PRIZE;
      return sum;
    }, 0);
  }

  calculateLottoProfit() {
    const lottoPrize = this.calculateLottoPrize();
    return ((lottoPrize / this.purchasePrice) * 100).toFixed(1);
  }

  calculateLottoRank(count, index, bonusMatch) {
    const rank = LOTTO_RANK[count];
    if (!rank) return; // 3개 미만으로 맞출
    const resultIndex = this.getResultIndex(rank, index, bonusMatch);
    this.lottoResults[resultIndex]++;
  }

  getResultIndex(rank, index, bonusMatch) {
    if (rank.checkBonus && bonusMatch[index]) {
      return 3;
    }
    return rank.index;
  }

  getLottoResults() {
    return this.lottoResults;
  }
}

export default LottoCalculator;
