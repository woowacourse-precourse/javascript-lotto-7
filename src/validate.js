import { Errors } from "./constants.js";

export const isValidCost = (cost) => {
  if (cost % 1000 !== 0) throw new Error(Errors.cost.NOT_CORRECT_UNIT);
};

export const isValidBonusNumber = (bonusNumber, winningNumbers) => {
  if (!Number.isInteger(bonusNumber))
    throw new Error(Errors.bonusNumber.NOT_INTEGER_NUMBER);

  if (winningNumbers.includes(bonusNumber))
    throw new Error(Errors.bonusNumber.NOT_UNIQUE_NUMBER);
};
