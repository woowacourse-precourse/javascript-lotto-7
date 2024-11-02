import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

export const limitMaxDigitNum = (inputNumber, limitMaxDigits) => {
  if (
    limitMaxDigits !== undefined &&
    !(inputNumber.toString().length <= limitMaxDigits)
  ) {
    throw new Error(ERR_MESSAGE_NUMBERS.TOO_LONG_LENGTH_NUMBER);
  }
};
