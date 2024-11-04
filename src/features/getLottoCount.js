import { ERROR, LOTTO_AMOUNT } from "../config/config.js";
import { convertNumber } from "./convertNumber.js";

export const getLottoCount = (strings) => {
  if (strings === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }

  let amount;
  try {
    amount = convertNumber(strings);
  } catch (e) {
    if (e.message === ERROR.NOT_NUMBER) {
      throw e;
    }
    throw new Error(ERROR.INVALID_NUMBER);

  }

  if (amount < 1000 || amount % 1000 !== 0) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  return amount / LOTTO_AMOUNT;
};
