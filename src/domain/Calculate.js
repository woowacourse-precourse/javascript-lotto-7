import { WINNING_RANK } from "../constants/message.js";

class Calculate {
  constructor(lottoNumbers, bonusNumber) {
    this.bonusNumber = bonusNumber;
    this.lottoNumbers = lottoNumbers;
    this.winningStatus = new Array(5).fill(0);
    this.totalReward = 0;
  }
  determineRank(lotto) {
    const matchedWinningCount = lotto.countMatchingNumbers(this.lottoNumbers);
    const hasBonusNumber = this.hasBonusNumber(this.bonusNumber);
    if (matchedWinningCount === 6) return 1;
    if (matchedWinningCount === 5 && hasBonusNumber) return 2;
    if (matchedWinningCount === 5) return 3;
    if (matchedWinningCount === 4) return 4;
    if (matchedWinningCount === 3) return 5;

    return -1;
  }

  updateWinningStatus(rank) {
    if (rank !== -1) {
      const rankIndex = WINNING_RANK.length - rank;
      this.winningStatus[rankIndex] += 1;
      this.totalReward += WINNING_RANK[rankIndex].reward;
    }
  }

  hasBonusNumber(bonusNumber) {
    return this.lottoNumbers.includes(bonusNumber);
  }

  calculateResult(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      const rank = this.determineRank(ticket);
      this.updateWinningStatus(rank);
    });

    return this.winningStatus;
  }

  calculateRate(totalTickets) {
    return (this.totalReward / (totalTickets.length * 100)) * 10;
  }
}

export default Calculate;
