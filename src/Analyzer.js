class Analyzer {
  #lottos;

  #winningNumbers;

  #winningTable;

  constructor(lottos, winningNumbers) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#winningTable = new Map();
  }

  #getMatchingNumbers() {
    const lottos = [...this.#lottos];
    const { numbers } = this.#winningNumbers;
    const matchedNumbers = lottos.map((lotto) =>
      lotto.countMatchingNumbers(numbers),
    );

    return matchedNumbers;
  }

  #makeWinningTable(matchedNumbers) {
    matchedNumbers.forEach((matchedCount) => {
      const currentCalculation = this.#winningTable.get(matchedCount) ?? 0;
      this.#winningTable.set(matchedCount, currentCalculation + 1);
    });
  }

  getWinningTable() {
    const matchedNumbers = this.#getMatchingNumbers();
    this.#makeWinningTable(matchedNumbers);

    return this.#winningTable;
  }
}

export default Analyzer;
