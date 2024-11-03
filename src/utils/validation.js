import { ERROR_MESSAGES } from "./messages.js";

export function validatePurchaseAmount(input) {
  const amount = Number(input);

  if (isNaN(amount)) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`
    );
  }
  if (amount % 1000 !== 0) {
    throw new Error(
      `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.MONEY_DEGREE}`
    );
  }

  return amount / 1000;
}
