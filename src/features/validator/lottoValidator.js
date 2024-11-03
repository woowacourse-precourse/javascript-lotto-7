import { ERROR_MESSAGE } from "../../constants/errorMessages.js";
import { LOTTO_NUMBER_COUNT } from "../../constants/lotto.js";
import { errorHandler } from "../../utils/errorHandler.js";

const isNumber = (value) => {
  if (isNaN(value)) errorHandler(ERROR_MESSAGE.number.notNumber);
  return true;
};

const isValidUnit = (unit, value) => {
  if (value % unit !== 0) errorHandler(ERROR_MESSAGE.lotto.invalidUnit);
  return true;
};

const isNotNull = (value) => {
  if (!value) errorHandler(ERROR_MESSAGE.string.notNull);
  return true;
};

const isNotDuplicated = (numbers) => {
  if (new Set(numbers).size !== LOTTO_NUMBER_COUNT)
    errorHandler(ERROR_MESSAGE.lotto.isDuplicated);
  return true;
};

const isValidLength = (numbers) => {
  if (numbers.length !== LOTTO_NUMBER_COUNT)
    errorHandler(ERROR_MESSAGE.lotto.invalidCount);
  return true;
};

const nestedInput = (counter) => {
  if (counter >= 10) errorHandler(ERROR_MESSAGE.number.tooManyNested);
};

export {
  isNumber,
  isValidUnit,
  isNotNull,
  isNotDuplicated,
  isValidLength,
  nestedInput,
};
