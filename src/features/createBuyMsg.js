import { MESSAGES } from "../config/config.js";

export const createBuyMsg = (lottoCount, lottoStrings) => {
  return `\n${lottoCount}${MESSAGES.BUY_COUNT}\n${lottoStrings}`;
};
