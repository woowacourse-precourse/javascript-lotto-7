import { MessageFormatter } from "./utils/MessageFormatter.js";
import { Calculator } from "./utils/Calculator.js";
import { NONE, RANKING } from "./constants/Constants.js";

class LottoResult {
  #totalRanking;

  constructor(rankings) {
    this.#totalRanking = {};
    this.initializeTotalRanking();
    this.getTotalRanking(rankings);
  }

  initializeTotalRanking() {
    for (let ranking = RANKING.FIRST; ranking <= RANKING.LAST; ranking++) {
      this.#totalRanking[ranking] = NONE;
    }
  }

  getTotalRanking(rankings) {
    rankings.forEach((ranking) => {
      if (ranking !== false) {
        return this.#totalRanking[ranking]++;
      }
    });
  }

  statistics() {
    return MessageFormatter.statisticsMessage(this.#totalRanking);
  }

  totalPrize() {
    return Calculator.totalPrize(this.#totalRanking);
  }
}

export default LottoResult;
