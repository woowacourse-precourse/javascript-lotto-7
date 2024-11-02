import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

export const limitRangeNum = (inputNumber, minNumValue, maxNumValue) => {
  if (
    minNumValue !== undefined &&
    maxNumValue !== undefined &&
    !(inputNumber >= minNumValue && inputNumber <= maxNumValue)
  ) {
    throw new Error(ERR_MESSAGE_NUMBERS.LIMIT_RANGE_NUMBER);
  }
};
