import Lotto from "../model/Lotto.js";
import prizeMoney from "./data.js";
import RandomNumberGenerator from "../util/RandomNumberGenerator.js";

class LottoGame {
  constructor(purchaseAmount) {
    this.lottoTickets = this.generateLottoTickets(purchaseAmount);
  }

  generateLottoTickets(amount) {
    const ticketCount = Math.floor(amount / 1000);
    return Array.from({ length: ticketCount }, () => new Lotto(RandomNumberGenerator.generateLottoNumbers()));
  }

  calculateRanks(winningNumbers, bonusNumber) {
    const ranks = {
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치 + 보너스 볼 일치": 0,
      "6개 일치": 0,
    };

    this.lottoTickets.forEach((ticket) => {
      const matchCount = ticket.getMatchCount(winningNumbers);
      const hasBonus = ticket.hasBonusNumber(bonusNumber);

      if (matchCount === 3) ranks["3개 일치"]++;
      if (matchCount === 4) ranks["4개 일치"]++;
      if (matchCount === 5) ranks["5개 일치"]++;
      if (matchCount === 5 && hasBonus) ranks["5개 일치 + 보너스 볼 일치"]++;
      if (matchCount === 6) ranks["6개 일치"]++;
    });

    return ranks;
  }

  calculateEarningRate(ranks, purchaseAmount) {
    const totalPrize = Object.entries(ranks).reduce(
      (sum, [rank, count]) => sum + prizeMoney[rank] * count,
      0
    );
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoGame;