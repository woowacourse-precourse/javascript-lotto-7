class Analyzer {
  #lottos;

  #winningNumbers;

  #winningTable;

  constructor(lottos, winningNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#winningTable = new Map();
  }

  #calculateMatchingNumbers() {
    const lottos = [...this.#lottos];
    const { numbers } = this.#winningNumbers;
    const matchedNumbers = lottos.map((lotto) =>
      lotto.countMatchingNumbers(numbers),
    );

    return matchedNumbers;
  }

  #makeWinningTable(matchedNumbers) {
    const DEFAULT_COUNT = 0;
    const UNIT_COUNT = 1;

    matchedNumbers.forEach((matchedCount) => {
      const currentCalculation =
        this.#winningTable.get(matchedCount) ?? DEFAULT_COUNT;
      this.#winningTable.set(matchedCount, currentCalculation + UNIT_COUNT);
    });
  }

  getWinningTable() {
    const matchedNumbers = this.#calculateMatchingNumbers();
    this.#makeWinningTable(matchedNumbers);

    return this.#winningTable;
  }
}

export default Analyzer;
