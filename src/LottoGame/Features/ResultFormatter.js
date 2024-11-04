import LOTTO_STANDARD from "./LottoInformation.js";

class ResultFormatter {
  #results;
  #outputs;

  constructor(results) {
    this.#results = results;
    this.#outputs = [];
    this.#generateOutput();
  }

  #getRankInfo(rank) {
    return LOTTO_STANDARD.find((standard) => standard.rank === rank);
  }

  #generateCountFormat(rank) {
    let rankInfo = this.#getRankInfo(rank);
    if (rankInfo.rank === 2) {
      return `${rankInfo.count}개 일치, 보너스 볼 일치`;
    }

    return `${rankInfo.count}개 일치`;
  }

  #generatePrizeFormat(rank) {
    let rankInfo = this.#getRankInfo(rank);
    return rankInfo.prize.toLocaleString();
  }

  #generateOutput() {}

  getOutput() {
    return this.#outputs;
  }
}

export default ResultFormatter;
