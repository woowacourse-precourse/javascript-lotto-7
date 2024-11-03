import {
  WINNING_NUMBER_MAX,
  WINNING_NUMBER_MIN,
} from "../constants/lottoConstants.js";

export const isWinningNumbersInRange = function (winningNumbers, errorMessage) {
  const winningNumbersArray = winningNumbers.split(",");
  winningNumbersArray.map((winningNumber) => {
    const isValid =
      winningNumber >= WINNING_NUMBER_MIN &&
      winningNumber <= WINNING_NUMBER_MAX;
    if (!isValid) throw new Error(errorMessage);
  });
};
