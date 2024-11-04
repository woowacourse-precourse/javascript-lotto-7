import { ERROR, PERCENT } from "../config/config.js";

export const calculateProfit = (amount, total) => {
  if (isNaN(amount) || isNaN(total)) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  const result = ((total / amount) * 100).toFixed(1);
  return `${result}${PERCENT}`;
};
