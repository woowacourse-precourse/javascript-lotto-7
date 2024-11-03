import { checkDuplicates } from "./checkDuplicates.js";
import LottoRank from "../LottoRank.js";

export const checkLotto = (lottoNumbers, winningNumbers, bonusNumber) => {
  checkDuplicates(winningNumbers, bonusNumber);

  const lottoSet = new Set(lottoNumbers);
  const matchCount = winningNumbers.filter((number) =>
    lottoSet.has(number)
  ).length;

  let isBonus = false;
  if (lottoSet.has(bonusNumber)) {
    isBonus = true;
  }

  return new LottoRank(matchCount, isBonus);
};
