import { LOTTO_PRIZE } from '../constant.js';

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
    const profitRate = ((lottoPrize / this.purchasePrice) * 100).toFixed(1);
    return profitRate;
  }

  calculateLottoRank(count, index, bonusMatch) {
    switch (count) {
      case 3:
        this.lottoResults[0]++;
        break;
      case 4:
        this.lottoResults[1]++;
        break;
      case 5:
        if (bonusMatch[index]) {
          this.lottoResults[3]++;
        } else {
          this.lottoResults[2]++;
        }
        break;
      case 6:
        this.lottoResults[4]++;

      default:
        break;
    }
  }

  getLottoResults() {
    return this.lottoResults;
  }
}

export default LottoCalculator;
