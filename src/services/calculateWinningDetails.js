import {
  INITIAL_WINNING_COUNT,
  MATCH_INCREMENT,
  WINNING_COUNT_LENGTH,
} from "../constants/resultConstants.js";

export const calculateWinningDetails = function (matchedNumbers, bonusNumber) {
  const winningCounts = new Array(WINNING_COUNT_LENGTH).fill(
    INITIAL_WINNING_COUNT
  );

  matchedNumbers.forEach((numbers) => {
    const includesBonus = numbers.includes(Number(bonusNumber));
    const matchedCount = numbers.length;

    if (includesBonus && matchedCount === 6) {
      winningCounts[3] += MATCH_INCREMENT;
    }

    if (includesBonus && matchedCount !== 6) {
      winningCounts[matchedCount - 1] += MATCH_INCREMENT;
    }

    if (!includesBonus) {
      winningCounts[matchedCount] += MATCH_INCREMENT;
    }
  });

  return winningCounts;
};
