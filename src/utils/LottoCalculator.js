import { LOTTO } from "../constants/constants.js";

const LottoCalculator = {
  calculateResults(lottoTickets, winningNumbers, bonusNumber) {
    const result = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    lottoTickets.forEach((ticket) => {
      const matchCount = this.getMatchCount(ticket, winningNumbers);
      const isBonusMatch = ticket.includes(Number(bonusNumber));

      if (matchCount === LOTTO.REWARDS.FIRST.MATCH_COUNT) {
        result.FIRST += 1;
        return;
      }
      if (matchCount === LOTTO.REWARDS.SECOND.MATCH_COUNT && isBonusMatch) {
        result.SECOND += 1;
        return;
      }
      if (matchCount === LOTTO.REWARDS.THIRD.MATCH_COUNT) {
        result.THIRD += 1;
        return;
      }
      if (matchCount === LOTTO.REWARDS.FOURTH.MATCH_COUNT) {
        result.FOURTH += 1;
        return;
      }
      if (matchCount === LOTTO.REWARDS.FIFTH.MATCH_COUNT) {
        result.FIFTH += 1;
      }
    });

    return result;
  },

  getMatchCount(ticket, winningNumbers) {
    const processedTicket = ticket.map(Number);
    const processedWinningNumbers = winningNumbers.map(Number);
    return processedTicket.filter((number) =>
      processedWinningNumbers.includes(number)
    ).length;
  },
};

export default LottoCalculator;
