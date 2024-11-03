import { LOTTO_PRICE, LOTTO_REWARD } from '../constants/LottoConstants.js';

class LottoResultAnalysis {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.winningStatus = new Array(6).fill(0);
    this.rewardSum = 0;
  }
  winningStatusAnalysis(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      const rank = this.checkRank(ticket);
      this.updateWinningStatus(rank);
    });
    const winningStatus = this.winningStatus;
    const profitRate = this.calculateProfitRate(lottoTickets);
    return { winningStatus, profitRate };
  }

  checkRank(lottoTicket) {
    const matchedWinningCount = lottoTicket.countMatchedWinningNumbers(
      this.winningNumbers
    );
    const hasBonusNumber = lottoTicket.hasBonusNumber(this.bonusNumber);
    if (matchedWinningCount === 6) return 1;
    if (matchedWinningCount === 5 && hasBonusNumber) return 2;
    if (matchedWinningCount === 5 && !hasBonusNumber) return 3;
    if (matchedWinningCount === 4) return 4;
    if (matchedWinningCount === 3) return 5;

    return -1;
  }

  updateWinningStatus(rank) {
    if (rank !== -1) {
      this.winningStatus[rank] += 1;
      this.rewardSum +=
        LOTTO_REWARD[['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'][rank - 1]];
    }
  }

  calculateProfitRate(lottoTickets) {
    return (
      (this.rewardSum / (lottoTickets.length * LOTTO_PRICE)) *
      100
    ).toFixed(1);
  }
}

export default LottoResultAnalysis;
