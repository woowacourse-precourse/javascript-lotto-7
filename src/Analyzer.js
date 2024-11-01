class Analyzer {
  #lottos;

  #winningNumbers;

  constructor(lottos, winningNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
  }

  #estimateTotalMatchingNumbers() {
    const { numbers } = this.#winningNumbers;
    const numbersOfMatchedList = this.#lottos.map((lotto) =>
      this.#estimateMatchingNumbers(lotto, numbers),
    );

    return numbersOfMatchedList;
  }

  #estimateMatchingNumbers(lotto, winningNumbers) {
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

  static #makeWinningTable(matchingNumbers) {
    const DEFAULT_COUNT = 0;
    const UNIT_COUNT = 1;
    const winningTable = new Map();

    matchingNumbers.forEach((matchedCount) => {
      const numbersOfLotto = winningTable.get(matchedCount) ?? DEFAULT_COUNT;
      winningTable.set(matchedCount, numbersOfLotto + UNIT_COUNT);
    });

    return winningTable;
  }

  getWinningTable() {
    const matchingNumbers = this.#estimateTotalMatchingNumbers();
    const winningTable = Analyzer.#makeWinningTable(matchingNumbers);

    return winningTable;
  }
}

export default Analyzer;
