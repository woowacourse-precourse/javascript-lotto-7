import { PARSER_WINNING_NUMBER } from "../constants/lotto.js";

export const parserWinningNumber = (winningNumber) => {
  const winningNumbers = winningNumber
    .split(PARSER_WINNING_NUMBER)
    .map((number) => parseInt(number, 10));
  return winningNumbers;
};
