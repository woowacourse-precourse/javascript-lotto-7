import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

export const isPositiveNumber = (inputNumber) => {
  if (!(inputNumber > 0)) {
    throw new Error(ERR_MESSAGE_NUMBERS.IS_NOT_POSITIVE_NUMBER);
  }
};
