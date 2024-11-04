import { ANALYZER } from './utils/Constants.js';

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
    const numbersOfMatched = lotto.countMatchingNumbers(winningNumbers);
    if (this.#isBonusWinning(numbersOfMatched, lotto)) {
      return ANALYZER.bonusTag;
    }

    return numbersOfMatched;
  }

  #isBonusWinning(numbersOfMatched, lotto) {
    return (
      numbersOfMatched === ANALYZER.bonusWinningStandard &&
      this.#checkIsBonusNumberMatched(lotto)
    );
  }

  #checkIsBonusNumberMatched(lotto) {
    const { bonusNumber } = this.#winningNumbers;
    return lotto.isBonusNumberMatched(bonusNumber);
  }

  static #initMatchingTable() {
    const matchedCounts = [
      ...Array.from(
        { length: ANALYZER.maximumMatched },
        (arrayLike, index) => index,
      ),
      ANALYZER.maximumMatched,
      ANALYZER.bonusTag,
    ];

    return new Map(
      matchedCounts.map((count) => [count, ANALYZER.defaultCount]),
    );
  }

  static #makeMatchingTable(matchingNumbers) {
    const matchingTable = Analyzer.#initMatchingTable();

    matchingNumbers.forEach((matchedCount) => {
      const numbersOfLotto =
        matchingTable.get(matchedCount) ?? ANALYZER.defaultCount;
      matchingTable.set(matchedCount, numbersOfLotto + ANALYZER.unitCount);
    });

    return matchingTable;
  }

  getMatchingTable() {
    const matchingNumbers = this.#estimateTotalMatchingNumbers();
    const matchingTable = Analyzer.#makeMatchingTable(matchingNumbers);

    return matchingTable;
  }
}

export default Analyzer;
