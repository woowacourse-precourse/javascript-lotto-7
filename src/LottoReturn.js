class LottoReturn {
  #purchasedAmount;
  #amount;

  constructor(purchasedAmount, winningRank) {
    this.#purchasedAmount = purchasedAmount;
    this.winningRank = winningRank;
    this.#amount = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      bonus: 30000000,
    };
  }

  #caculatelWinningAmount() {
    const winningAmount =
      this.winningRank[3] * this.#amount[3] +
      this.winningRank[4] * this.#amount[4] +
      this.winningRank[5] * this.#amount[5] +
      this.winningRank[6] * this.#amount[6] +
      this.winningRank.bonus * this.#amount.bonus;

    return winningAmount;
  }

  caculateReturn() {
    const winningAmount = this.#caculatelWinningAmount();
    const num = (winningAmount / this.#purchasedAmount) * 100;

    return Math.round(num * 10) / 10;
  }
}
export default LottoReturn;
