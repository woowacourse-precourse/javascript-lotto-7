import Lotto from './Lotto.js';

class LottoManager {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.purchaseNumber = this.purchaseAmount / 1000;
    this.lottoList = this.generateLottoList();
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.rateOfReturn = null;
    this.winningLottoCounts = [0, 0, 0, 0, 0];
  }

  generateLottoList() {
    const lottoList = [];
    for (let i = 0; i < this.purchaseNumber; i++) {
      const lotto = new Lotto();
      lottoList.push(lotto.getLotto());
    }
    return lottoList;
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.winningNumbers = numbers;
    this.bonusNumber = bonusNumber;
    this.winningNumbers.push(bonusNumber);
  }

  getWinningLottoCounts() {
    this.lottoList.forEach((lotto) => {
      const matches = this.winningNumbers.filter((number) =>
        lotto.includes(number),
      ).length;
      if (matches === 3) this.winningLottoCounts[0]++;
      if (matches === 4) this.winningLottoCounts[1]++;
      if (matches === 5 && !lotto.includes(this.bonusNumber))
        this.winningLottoCounts[2]++;
      if (matches === 5 && lotto.includes(this.bonusNumber))
        this.winningLottoCounts[3]++;
      if (matches === 6) this.winningLottoCounts[4]++;
    });
    return this.winningLottoCounts;
  }

  calculateRateOfReturn() {
    let isWinningPrize = 0;
    isWinningPrize += this.winningLottoCounts[0] * 5000;
    isWinningPrize += this.winningLottoCounts[1] * 50000;
    isWinningPrize += this.winningLottoCounts[2] * 1500000;
    isWinningPrize += this.winningLottoCounts[3] * 30000000;
    isWinningPrize += this.winningLottoCounts[4] * 2000000000;

    const rateOfReturn = (isWinningPrize / this.purchaseAmount) * 100;
    return rateOfReturn.toFixed(1);
  }
}

export default LottoManager;
