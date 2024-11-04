import { NEED_TO_CHHECK_BONUS_RANK, RANK_TUPLE, UPGRADE_RANK_NUMBER } from "../constants/lotto.js";

class Rank {
  static #rankMap = new Map(RANK_TUPLE);
  #result;
  
  constructor(result){
    this.#result = result;
  }

  get value() {
    return this.#calcuateRank();
  }

  #calcuateRank () {
    const mappingedRank = Rank.#rankMap.get(this.#result.matched);
    if (NEED_TO_CHHECK_BONUS_RANK === mappingedRank && this.#result.bonusMatch) {
      return mappingedRank + UPGRADE_RANK_NUMBER;
    }
    return mappingedRank;
  }
}

export default Rank;