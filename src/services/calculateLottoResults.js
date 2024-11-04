import { WINNING_NUMBER_DELIMITER } from "../constants/lottoConstants.js";

export const calculateLottoResults = function (
  winningNumbers,
  lottoNumbers,
  bonusNumber
) {
  const mergedWinningAndBonusNumbers =
    (winningNumbers += `${WINNING_NUMBER_DELIMITER}${bonusNumber}`);

  console.log(mergedWinningAndBonusNumbers);

  const winningNumberArray = mergedWinningAndBonusNumbers
    .split(WINNING_NUMBER_DELIMITER)
    .map((number) => Number(number));

  const matchingNumbers = lottoNumbers.map((lottoSet) => {
    return lottoSet.filter((lottoNumber) =>
      winningNumberArray.includes(lottoNumber)
    );
  });

  return matchingNumbers;
};
