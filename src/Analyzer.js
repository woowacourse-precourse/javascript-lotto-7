class Analyzer {
  #lottos;

  #winningNumbers;

  constructor(lottos, winningNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
  }

  #calculateMatchingCount() {
    const { numbers } = this.#winningNumbers;
    const matchingCount = this.#lottos.map((lotto) =>
      this.#calculateMatchingNumbers(lotto, numbers),
    );

    return matchingCount;
  }

  #calculateMatchingNumbers(lotto, winningNumbers) {
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

  static #makeWinningTable(matchedNumbers) {
    const DEFAULT_COUNT = 0;
    const UNIT_COUNT = 1;
    const winningTable = new Map();

    matchedNumbers.forEach((matchedCount) => {
      const numbersOfLotto = winningTable.get(matchedCount) ?? DEFAULT_COUNT;
      winningTable.set(matchedCount, numbersOfLotto + UNIT_COUNT);
    });

    return winningTable;
  }

  getWinningTable() {
    const matchedNumbers = this.#calculateMatchingCount();
    const winningTable = Analyzer.#makeWinningTable(matchedNumbers);

    return winningTable;
  }
}

export default Analyzer;
