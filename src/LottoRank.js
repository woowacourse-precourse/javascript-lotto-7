import { ERROR, TYPES } from "./config/config.js";

class LottoRank {
  #rank;
  #isBonus;

  constructor(rank, isBonus) {
    this.#validate(rank, isBonus);
    this.#rank = rank;
    this.#isBonus = isBonus;
  }

  #validate(rank, isBonus) {
    if (typeof isBonus !== TYPES.BOOLEAN) {
      throw new Error(ERROR.NOT_BOOLEAN);
    }

    if (isNaN(rank)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
  }

  getRottoRank() {
    return { rank: this.#rank, isBonus: this.#isBonus };
  }
}

export default LottoRank;