class LottoPrize {
  #lottoChecker;

  #prize;

  constructor(lottoChecker) {
    this.#lottoChecker = lottoChecker;
    this.#prize = {
      first: { condition: 6, money: 2000000000, count: 0 },
      second: { condition: 5, money: 30000000, count: 0 },
      third: { condition: 5, money: 1500000, count: 0 },
      forth: { condition: 4, money: 50000, count: 0 },
      fifth: { condition: 3, money: 5000, count: 0 },
    };
  }

  /**
   *
   * @param {"first"|"second"|"third"|"forth"|"fifth"} rank - 등수
   */
  #updateRanks(rank) {
    this.#prize[rank].count += 1;
    return rank;
  }

  /**
   *
   * @param {number[]} lotto - 로또 배열
   */
  getRank(lotto) {
    const { winningCount, isMatchBonus } = this.#lottoChecker.checkLotto(lotto);

    if (winningCount === 6) return this.#updateRanks("first");
    if (winningCount === 5 && isMatchBonus) return this.#updateRanks("second");
    if (winningCount === 5) return this.#updateRanks("third");
    if (winningCount === 4) return this.#updateRanks("forth");
    if (winningCount === 3) return this.#updateRanks("fifth");
    return false;
  }

  /**
   *
   * @param {number[][]} lottos
   */
  getPrize(lottos) {
    lottos.forEach((lotto) => {
      this.getRank(lotto);
    });
    return this.#prize;
  }

  getReturnRate(money) {
    const totalPrize = Object.values(this.#prize)
      .reduce((acc, cur) => acc + cur.count * cur.money, 0);
    return (totalPrize / money) * 100;
  }
}

export default LottoPrize;
