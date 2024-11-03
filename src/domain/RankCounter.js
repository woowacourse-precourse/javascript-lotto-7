import { LOTTO_RANK } from '../constants/lottoStandard.js';

class RankCounter {
  #rankCounter;

  constructor() {
    this.#rankCounter = {
      FIRST_RANK: 0,
      SECOND_RANK: 0,
      THIRD_RANK: 0,
      FOURTH_RANK: 0,
      FIFTH_RANK: 0,
    };
  }

  increaseRankCounter(rank) {
    if (rank !== LOTTO_RANK.SIXTH_RANK) {
      const rankIndex = 5 - rank;
      this.#rankCounter[Object.keys(this.#rankCounter)[rankIndex]] += 1;
    }
  }

  getRankCounterArray() {
    return Object.values(this.#rankCounter);
  }
}

export default RankCounter;
