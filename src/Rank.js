class Rank {
  #rank;
  #count;
  #winnings;
  #matchedNumberCount;

  constructor(rank, winnings, matchedNumberCount) {
    this.#rank = rank;
    this.#count = 0;
    this.#winnings = winnings;
    this.#matchedNumberCount = matchedNumberCount;
  }

  increaseCount() {
    this.#count += 1;
  }
}

export default Rank;
