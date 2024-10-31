import { ERROR, LOTTO_AMOUNT } from "../config/config.js";
import { convertNumber } from "./convertNumber.js";

export const getLottoCount = (strings) => {
  if (strings === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }

  const amount = convertNumber(strings);

  if (amount % 1000 !== 0) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  return amount / LOTTO_AMOUNT;
};
