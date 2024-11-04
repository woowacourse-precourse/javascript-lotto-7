import RANKS from '../Model/Rank.js';

class IOService {
  constructor(inputView, outputView, systemMessages) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.systemMessages = systemMessages;
  }

  async getInputWhileValid(validator, promptMessage) {
    return this.inputView(validator, promptMessage);
  }

  printMessage(message) {
    this.outputView(message);
  }

  printLotteries(lotteries) {
    lotteries.forEach((lotto) =>
      this.printMessage(`${lotto.toString(lotto.getNumbers())}`),
    );
  }

  printStatistics(rankCounts) {
    this.printMessage(this.systemMessages.statsHeader || '당첨 통계\n---');
    this.printMessage(
      `3개 일치 (${RANKS.THREE_MATCH.prize.toLocaleString()}원) - ${rankCounts.threeMatch.ticket}개`,
    );
    this.printMessage(
      `4개 일치 (${RANKS.FOUR_MATCH.prize.toLocaleString()}원) - ${rankCounts.fourMatch.ticket}개`,
    );
    this.printMessage(
      `5개 일치 (${RANKS.FIVE_MATCH.prize.toLocaleString()}원) - ${rankCounts.fiveMatch.ticket}개`,
    );
    this.printMessage(
      `5개 일치, 보너스 볼 일치 (${RANKS.FIVE_MATCH_WITH_BONUS.prize.toLocaleString()}원) - ${rankCounts.fiveMatchWithBonus.ticket}개`,
    );
    this.printMessage(
      `6개 일치 (${RANKS.SIX_MATCH.prize.toLocaleString()}원) - ${rankCounts.sixMatch.ticket}개`,
    );
  }

  printRevenueRate(revenueRate) {
    this.printMessage(
      `${this.systemMessages.revenueMessage || '총 수익률은'} ${revenueRate}%입니다.`,
    );
  }
}
export default IOService;
