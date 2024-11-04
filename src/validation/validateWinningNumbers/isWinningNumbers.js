import { WINNING_NUMBER_DELIMITER } from "../../constants/lottoConstants.js";
import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";
import { isNumber } from "../isNumber.js";

export const isWinningNumbers = function (winningNumbers) {
  const winningNumbersArray = winningNumbers.split(WINNING_NUMBER_DELIMITER);
  winningNumbersArray.map((winningNumber) => {
    isNumber(winningNumber, WINNING_NUMBERS.NOT_A_NUMBER);
  });
};
