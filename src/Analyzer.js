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
      return ANALYZER.winningBonusTag;
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

  static #makeWinningTable(matchingNumbers) {
    const winningTable = new Map();

    matchingNumbers.forEach((matchedCount) => {
      const numbersOfLotto =
        winningTable.get(matchedCount) ?? ANALYZER.defaultCount;
      winningTable.set(matchedCount, numbersOfLotto + ANALYZER.unitCount);
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
