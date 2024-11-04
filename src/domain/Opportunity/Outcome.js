import LOTTO_RANK from "../../constant/Rank.js";

class Outcome {
  #outcome;

  constructor() {
    this.#outcome = 0;
  }
  calculateOutcome(stats) {
    this.#outcome = Object.entries(LOTTO_RANK)
      .reduce((sum, [rank, rankInfo]) => sum + (stats[rank] * rankInfo.prize), 0);
  }

  get outcome() {
    return this.#outcome;
  }
}

export default Outcome;
