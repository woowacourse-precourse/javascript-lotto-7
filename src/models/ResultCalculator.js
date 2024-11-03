import { RESULT } from "../constants/Constants.js";

class ResultCalculator {
  static calculateWinningStatistics(lottoTickets, winningNumbers) {
    const statistics = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    lottoTickets.forEach((ticket) => {
      const matchedCount = this.countMatchedNumbers(
        ticket.getNumbers(),
        winningNumbers.getNumbers()
      );
      const isBonusMatched = ticket
        .getNumbers()
        .includes(winningNumbers.getBonusNumber());

      if (matchedCount === 6) {
        statistics.FIRST++;
      } else if (matchedCount === 5 && isBonusMatched) {
        statistics.SECOND++;
      } else if (matchedCount === 5) {
        statistics.THIRD++;
      } else if (matchedCount === 4) {
        statistics.FOURTH++;
      } else if (matchedCount === 3) {
        statistics.FIFTH++;
      }
    });

    return statistics;
  }

  static countMatchedNumbers(ticketNumbers, winningNumbers) {
    return ticketNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static calculateReturnRate(statistics, amountSpent) {
    let totalPrize = 0;
    totalPrize += statistics.FIRST * RESULT.WINNING_PRIZE.FIRST;
    totalPrize += statistics.SECOND * RESULT.WINNING_PRIZE.SECOND;
    totalPrize += statistics.THIRD * RESULT.WINNING_PRIZE.THIRD;
    totalPrize += statistics.FOURTH * RESULT.WINNING_PRIZE.FOURTH;
    totalPrize += statistics.FIFTH * RESULT.WINNING_PRIZE.FIFTH;

    return (totalPrize / amountSpent) * 100;
  }
}

export default ResultCalculator;
