import { checkDuplicates } from "./checkDuplicates.js";
import { BONUS } from "../config/config.js";

export const checkLotto = (lottoNumbers, winningNumbers, bonusNumber) => {
  checkDuplicates(winningNumbers, bonusNumber);

  const lottoSet = new Set(lottoNumbers);
  const matchCount = winningNumbers.filter((number) =>
    lottoSet.has(number)
  ).length;

  let isBonus = false;
  if (lottoSet.has(bonusNumber) && matchCount === 5) {
    isBonus = true;
    matchCount = BONUS;
  }

  return matchCount;
};
