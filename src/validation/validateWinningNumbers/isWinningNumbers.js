import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";
import { isNumber } from "../isNumber.js";

export const isWinningNumbers = function (winningNumbers) {
  const winningNumbersArray = winningNumbers.split(",");
  winningNumbersArray.map((winningNumber) => {
    isNumber(winningNumber, WINNING_NUMBERS.NOT_A_NUMBER);
  });
};
