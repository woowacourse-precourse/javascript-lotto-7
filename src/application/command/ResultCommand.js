import LOTTO_RANK from "../../constant/Rank.js";

class ResultCommand {
  #outputPort;

  constructor(outputPort) {
    this.#outputPort = outputPort;
  }

  execute(myLottoList, winningLotto, opportunity) {
    this.handleStats(myLottoList, winningLotto);
    this.handleRate(myLottoList, opportunity);
  }

  handleStats(myLottoList, winningLotto) {
    myLottoList.matchMyLottoList(winningLotto);
    myLottoList.compileStats();
    this.#outputPort.displayNewLine();
    this.#outputPort.displayStatHeader();
    Object.entries(LOTTO_RANK).forEach(([rank, rankInfo]) => this.#outputPort.displayStats(
      rankInfo,
      myLottoList.stats[rank],
    ));
  }

  handleRate(myLottoList, opportunity) {
    opportunity.calculateOutcome(myLottoList.stats);
    opportunity.calculateRate();
    this.#outputPort.displayRate(opportunity.rate);
  }
}

export default ResultCommand;
