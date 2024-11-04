import {
  CLOSE_PARENS,
  CLOSE_PROFIT,
  COUNT,
  LINE,
  MESSAGES,
  OPEN_PARENS,
  OPEN_PROFIT,
  RANK_MAP,
  RANK_LIST,
} from "../config/config.js";

export const createResultMsg = (lottoRankMap, profit) => {
  let resultMsg = MESSAGES.WIN_STATS;
  RANK_LIST.forEach((rank) => {
    const rankCount = lottoRankMap.get(rank) || 0;
    const { AMOUNT, MESSAGE } = RANK_MAP.get(rank);

    if (rank === "BONUS") rank = 5;
    resultMsg += `${rank}${COUNT} ${MESSAGE} ${OPEN_PARENS}${AMOUNT.toLocaleString()}${CLOSE_PARENS} ${LINE} ${rankCount}${COUNT}\n`;
  });
  resultMsg += `${OPEN_PROFIT} ${profit}${CLOSE_PROFIT}`;

  return resultMsg;
};
