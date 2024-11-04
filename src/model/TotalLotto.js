export class TotalLotto {
  constructor() {
    this.totalLotto = [];
  }

  storeLotto(lotto) {
    this.totalLotto = [...this.totalLotto, lotto];
  }

  calculateWinning(winningLotto) {
    this.totalLotto.forEach((lotto) => {
      this.storeTotalWinning(...lotto.countWinningNumber(winningLotto));
    });
  }
}
