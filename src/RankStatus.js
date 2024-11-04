class RankStatus {
  #ranks;
  constructor() {
    this.#ranks = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  increseRankCount(rank) {
    if (rank === 1) return this.#ranks.firstPlace++;
    if (rank === 2) return this.#ranks.secondPlace++;
    if (rank === 3) return this.#ranks.thirdPlace++;
    if (rank === 4) return this.#ranks.fourthPlace++;
    if (rank === 5) return this.#ranks.fifthPlace++;
    return 0;
  }

  getRankCount(rank) {
    if (rank === 1) return this.#ranks.firstPlace;
    if (rank === 2) return this.#ranks.secondPlace;
    if (rank === 3) return this.#ranks.thirdPlace;
    if (rank === 4) return this.#ranks.fourthPlace;
    if (rank === 5) return this.#ranks.fifthPlace;
  }
}

export default RankStatus;
