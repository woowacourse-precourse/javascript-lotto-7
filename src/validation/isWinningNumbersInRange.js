import {
  WINNING_NUMBER_DELIMITER,
  WINNING_NUMBER_MAX,
  WINNING_NUMBER_MIN,
} from "../constants/lottoConstants.js";

export const isWinningNumbersInRange = function (winningNumbers, errorMessage) {
  const winningNumbersArray = winningNumbers.split(WINNING_NUMBER_DELIMITER);
  winningNumbersArray.map((winningNumber) => {
    const isValid =
      winningNumber >= WINNING_NUMBER_MIN &&
      winningNumber <= WINNING_NUMBER_MAX;
    if (!isValid) throw new Error(errorMessage);
  });
};
