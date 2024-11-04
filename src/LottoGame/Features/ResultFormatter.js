import LOTTO_STANDARD from "../Utils/LottoStandard.js";

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
      return `${rankInfo.targetCount}개 일치, 보너스 볼 일치`;
    }

    return `${rankInfo.targetCount}개 일치`;
  }

  #generatePrizeFormat(rank) {
    let rankInfo = this.#getRankInfo(rank);
    return rankInfo.prize.toLocaleString();
  }

  #generateOutput() {
    for (let result of this.#results) {
      let countFormat = this.#generateCountFormat(result.rank);
      let prizeFormat = this.#generatePrizeFormat(result.rank);
      let output = `${countFormat} (${prizeFormat}원) - ${result.count}개`;

      this.#outputs.push(output);
    }
  }

  getOutput() {
    return this.#outputs;
  }
}

export default ResultFormatter;
