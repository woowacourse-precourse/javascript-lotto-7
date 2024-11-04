import { ERROR, MESSAGES } from "../../config/config.js";
import { inputHandler } from "../../handlers/inputHandler.js";

export const inputAmount = async () => {
  const amount = await inputHandler(MESSAGES.INPUT_BUY_COST);

  if (amount === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  if (Number.isNaN(amount)) {
    throw new Error(ERROR.NOT_NUMBER);
  }
  if (amount % 1000 !== 0 || amount < 1000) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  return amount;
};
