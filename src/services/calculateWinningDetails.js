import {
  INITIAL_WINNING_COUNT,
  MATCH_INCREMENT,
  WINNING_COUNT_LENGTH,
} from "../constants/resultConstants.js";

export const calculateWinningDetails = function (matchingNumber) {
  const winningCounts = new Array(WINNING_COUNT_LENGTH).fill(
    INITIAL_WINNING_COUNT
  );

  matchingNumber.forEach((match) => {
    switch (match.length) {
      case 3:
        winningCounts[0] += MATCH_INCREMENT;
        break;
      case 4:
        winningCounts[1] += MATCH_INCREMENT;
        break;
      case 5:
        winningCounts[2] += MATCH_INCREMENT;
        break;
      case 6:
        winningCounts[4] += MATCH_INCREMENT;
        break;
      default:
        break;
    }
  });

  return winningCounts;
};
