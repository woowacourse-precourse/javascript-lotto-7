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
}

export default Analyzer;
