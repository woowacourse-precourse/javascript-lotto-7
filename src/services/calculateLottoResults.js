import { WINNING_NUMBER_DELIMITER } from "../constants/lottoConstants.js";

export const calculateLottoResults = function (winningNumbers, lottoNumbers) {
  const winningNumberArray = winningNumbers
    .split(WINNING_NUMBER_DELIMITER)
    .map((number) => Number(number));

  const matchingNumbers = lottoNumbers.map((lottoSet) => {
    return lottoSet.filter((lottoNumber) =>
      winningNumberArray.includes(lottoNumber)
    );
  });

  return matchingNumbers;
};
