const NEED_TO_CHHECK_BONUS_RANK =  3;
const UPGRADE_RANK_NUMBER = -1;

const PRIZE_TUPLE = Object.freeze([
  [1, 2_000_000_000],
  [2, 30_000_000],
  [3, 1_500_000],
  [4, 50_000],
  [5, 5_000],
]);

const RANK_TUPLE = Object.freeze([
  [6, 1],
  [5, 3],
  [4, 4],
  [3, 5]
]);

class Prize {
  static #map = {
    prize: new Map(PRIZE_TUPLE),
    rank: new Map(RANK_TUPLE),
  };
  #result;
  
  static getPrize(){
    const rank = this.rank;
    return this.#map.prize.get(rank);
  }

  get rank() {
    return this.#calcuateRank();
  }

  #calcuateRank () {
    const mappingedRank = Prize.#map.rank.get(this.#result);
    if (mappingedRank === NEED_TO_CHHECK_BONUS_RANK && this.#result.bonusMatch){
      return mappingedRank + UPGRADE_RANK_NUMBER;
    }
    return mappingedRank;
  }
}