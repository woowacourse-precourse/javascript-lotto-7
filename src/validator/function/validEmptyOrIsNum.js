import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

const isEmptyNumber = (inputNumber) =>
  inputNumber !== null && inputNumber !== undefined && inputNumber !== "";
const isNumber = (inputNumber) =>
  typeof inputNumber === "number" && !isNaN(inputNumber);

export const emptyOrIsNum = (inputNumber) => {
  if (!isEmptyNumber(inputNumber)) {
    throw new Error(ERR_MESSAGE_NUMBERS.EMPTY_NUMBER_VALUE);
  }
  if (!isNumber(inputNumber)) {
    throw new Error(ERR_MESSAGE_NUMBERS.IS_NOT_NUMBER);
  }
};
