import { RANK_MAP } from "../config/config.js";

export const getTotalAmount = (lottoRankMap) => {
  let totalAmount = 0;
  for (const [rank, count] of lottoRankMap.entries()) {
    totalAmount += RANK_MAP.get(rank).AMOUNT * count;
  }
  return totalAmount;
};
