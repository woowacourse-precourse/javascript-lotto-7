class LottoResult {
  #results;

  constructor(ranks) {
    this.#results = Array.from({ length: 5 }, (_, index) => ({
      rank: 5 - index,
      count: 0,
    }));

    this.#generateResults(ranks);
  }

  #generateResults(ranks) {
    for (let rank of ranks) {
      if (rank !== 0) {
        this.#results[rank - 1].count += 1;
      }
    }
  }

  getResults() {
    return this.#results;
  }
}

export default LottoResult;
