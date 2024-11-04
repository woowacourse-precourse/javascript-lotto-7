import { CONSTANTS } from "./constants/constants.js";

function calculateWinningStatistics(ticketList, winningNumbers, bonusNumber) {
  const winningCounts = [0, 0, 0, 0, 0];

  ticketList.forEach((ticket) => {
    const matchedNumbersCount = ticket.filter((num) =>
      winningNumbers.includes(num)
    ).length;

    switch (matchedNumbersCount) {
      case CONSTANTS.MATCH_COUNT_SIX:
        winningCounts[CONSTANTS.FIRST_PLACE] += 1;
        break;

      case CONSTANTS.MATCH_COUNT_FIVE:
        if (ticket.includes(bonusNumber)) {
          winningCounts[CONSTANTS.SECOND_PLACE] += 1;
          return;
        }
        winningCounts[CONSTANTS.THIRD_PLACE] += 1;
        break;

      case CONSTANTS.MATCH_COUNT_FOUR:
        winningCounts[CONSTANTS.FOURTH_PLACE] += 1;
        break;

      case CONSTANTS.MATCH_COUNT_THREE:
        winningCounts[CONSTANTS.FIFTH_PLACE] += 1;
        break;

      default:
        break;
    }
  });

  return winningCounts;
}

export default calculateWinningStatistics;
