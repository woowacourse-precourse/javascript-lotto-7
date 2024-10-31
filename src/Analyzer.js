class Analyzer {
  #lottos;

  #winningNumbers;

  #winningTable;

  constructor(lottos, winningNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#winningTable = new Map();
  }

  #calculateMatchingCount() {
    const { numbers } = this.#winningNumbers;
    const matchingCount = this.#lottos.map((lotto) =>
      this.#calculateMatchingNumber(lotto, numbers),
    );

    return matchingCount;
  }

  #calculateMatchingNumber(lotto, winningNumbers) {
    const WINNING_BONUS_TAG = 'bonus';
    const numbersOfMatched = lotto.countMatchingNumbers(winningNumbers);

    if (this.#isBonusWinning(numbersOfMatched, lotto)) {
      return WINNING_BONUS_TAG;
    }

    return numbersOfMatched;
  }

  #isBonusWinning(numbersOfMatched, lotto) {
    const BONUS_WINNING_STANDARD = 5;

    return (
      numbersOfMatched === BONUS_WINNING_STANDARD &&
      this.#checkIsBonusNumberMatched(lotto)
    );
  }

  #checkIsBonusNumberMatched(lotto) {
    const { bonusNumber } = this.#winningNumbers;
    return lotto.isBonusNumberMatched(bonusNumber);
  }

  #makeWinningTable(matchedNumbers) {
    const DEFAULT_COUNT = 0;
    const UNIT_COUNT = 1;

    matchedNumbers.forEach((matchedCount) => {
      const numbersOfLotto =
        this.#winningTable.get(matchedCount) ?? DEFAULT_COUNT;
      this.#winningTable.set(matchedCount, numbersOfLotto + UNIT_COUNT);
    });
  }

  getWinningTable() {
    const matchedNumbers = this.#calculateMatchingCount();
    this.#makeWinningTable(matchedNumbers);

    return this.#winningTable;
  }
}

export default Analyzer;
