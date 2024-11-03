import { ERROR_MESSAGE } from "../../constants/errorMessages.js";
import { errorHandler } from "../../utils/errorHandler.js";

const isNumber = (value) => {
  if (isNaN(value)) errorHandler(ERROR_MESSAGE.number.notNumber);
  return true;
};

const isValidUnit = (unit, value) => {
  if (value % unit !== 0) errorHandler(ERROR_MESSAGE.lotto.invalidUnit);
  return true;
};

export { isNumber, isValidUnit };
