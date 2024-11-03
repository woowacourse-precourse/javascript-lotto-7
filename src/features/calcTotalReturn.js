import { ERROR, PERCENT } from "../config/config.js";

export const caclTotalReturn = (amount, total) => {
  if (isNaN(amount) || isNaN(total)) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  const result = (total / amount).toFixed(1);
  return `${result}${PERCENT}`;
};
