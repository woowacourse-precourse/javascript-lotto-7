class LottoPrize {
  #winningNumbers;

  #bonusNumber;

  ranks;

  constructor() {
    this.#winningNumbers = {};
    this.#bonusNumber = 0;
    this.ranks = {
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
    };
  }

  createWinningNumbers(numbers) {
    numbers.split(",").forEach((number) => {
      this.#winningNumbers[number] = true;
    });
  }

  createBonusNumber(number) {
    this.#bonusNumber = Number(number);
  }

  isWinningNumber(number) {
    if (this.#winningNumbers[number]) return true;
    return false;
  }

  isBonusNumber(number) {
    return this.#bonusNumber === number;
  }

  /**
   *
   * @param {number[]} lottos - 로또 배열
   */
  countMatchNumbers(lottos) {
    let isMatchBonus = false;
    const winningCount = lottos.reduce(
      (count, lotto) => {
        if (this.isBonusNumber(lotto)) {
          isMatchBonus = true;
          return count;
        }
        return count + this.isWinningNumber(lotto);
      },
      0,
    );
    return { winningCount, isMatchBonus };
  }

  /**
   *
   * @param {number[]} lottos - 로또 배열
   */
  getRank(lottos) {
    const { winningCount, isMatchBonus } = this.countMatchNumbers(lottos);

    if (winningCount === 6) return this.#updateRanks("first");
    if (winningCount === 5 && isMatchBonus) return this.#updateRanks("second");
    if (winningCount === 5) return this.#updateRanks("third");
    if (winningCount === 4) return this.#updateRanks("forth");
    if (winningCount === 3) return this.#updateRanks("fifth");
    return false;
  }

  /**
   *
   * @param {"first"|"second"|"third"|"forth"|"fifth"} rank - 등수
   */
  #updateRanks(rank) {
    this.ranks[rank] += 1;
    return rank;
  }
}

export default LottoPrize;
