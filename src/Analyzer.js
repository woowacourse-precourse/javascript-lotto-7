import { ANALYZER } from './Constants.js';

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

  static #makeMatchingTable(matchingNumbers) {
    const matchingTable = new Map();

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
