import { ERROR, MESSAGES } from "../config/config.js";

export const createBuyMsg = (lottoCount, lottoStrings) => {
  if (Number.isNaN(lottoCount)) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  if (lottoStrings === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  return `\n${lottoCount}${MESSAGES.BUY_COUNT}\n${lottoStrings}`;
};
