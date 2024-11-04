import { BONUS } from "../config/config.js";
import { checkLotto } from "./checkLotto.js";

export const getLottoRanks = (lottoList, winningNumbers, bonusNumber) => {
  let lottoRankMap = new Map();

  for (const lotto of lottoList) {
    const rank = checkLotto(lotto.getNumbers(), winningNumbers, bonusNumber);
    if (rank !== BONUS && rank <= 2) {
      continue;
    }
    if (!lottoRankMap.has(rank)) {
      lottoRankMap.set(rank, 0);
    }
    lottoRankMap.set(rank, lottoRankMap.get(rank) + 1);
  }

  return lottoRankMap;
};
