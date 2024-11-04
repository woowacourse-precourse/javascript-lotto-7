class Rank {
  #rank;
  #winningCount;
  #winnings;
  #matchedNumberCount;

  constructor(rank, winnings, matchedNumberCount) {
    this.#rank = rank;
    this.#winningCount = 0;
    this.#winnings = winnings;
    this.#matchedNumberCount = matchedNumberCount;
  }

  increaseCount() {
    this.#winningCount += 1;
  }

  get winningCount() {
    return JSON.parse(JSON.stringify(this.#winningCount));
  }

  get winnings() {
    return JSON.parse(JSON.stringify(this.#winnings));
  }

  get matchedNumberCount() {
    return JSON.parse(JSON.stringify(this.#matchedNumberCount));
  }
}

export default Rank;
