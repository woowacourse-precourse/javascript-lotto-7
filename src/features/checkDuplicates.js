import { ERROR } from "../config/config.js";

export const checkDuplicates = (winningNumbers, bonusNumber) => {
  const winningSet = new Set(winningNumbers);
  if (winningSet.has(bonusNumber)) {
    throw new Error(ERROR.DUPLICATE_NUMBER);
  }
};
