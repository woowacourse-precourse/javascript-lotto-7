class LottoPrize {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = {};
    this.#bonusNumber = 0;
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
}

export default LottoPrize;
