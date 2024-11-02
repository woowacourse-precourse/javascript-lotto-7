class LottoReturn {
  #purchasedAmount;

  constructor(purchasedAmount, winningRank) {
    this.#purchasedAmount = purchasedAmount;
    this.winningRank = winningRank;
  }

  #caculatelWinningAmount() {
    const amount = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      bonus: 30000000,
    };

    const winningAmount =
      this.winningRank[3] * amount[3] +
      this.winningRank[4] * amount[4] +
      this.winningRank[5] * amount[5] +
      this.winningRank[6] * amount[6] +
      this.winningRank.bonus * amount.bonus;
    return winningAmount;
  }

  caculateReturn() {
    const winningAmount = this.#caculatelWinningAmount();
    return (winningAmount / this.#purchasedAmount) * 100;
  }
}
export default LottoReturn;
