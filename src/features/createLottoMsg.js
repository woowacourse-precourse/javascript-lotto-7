import { DELIMITER, OPEN_BRACKET, CLOSE_BRACKET } from "../config/config.js";

export const createLottoMsg = (lotto) => {
  return `${OPEN_BRACKET}${lotto
    .getNumbers()
    .join(`${DELIMITER} `)}${CLOSE_BRACKET}\n`;
};
