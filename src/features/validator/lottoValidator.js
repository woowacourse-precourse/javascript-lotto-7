import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../../constants/errorMessages.js";
import { LOTTO_NUMBER_COUNT } from "../../constants/lotto.js";
import { errorHandler } from "../../utils/errorHandler.js";

//문자열 관련 validation
const isNotNull = (value) => {
  if (!value) errorHandler(ERROR_MESSAGE.string.notNull);
  return true;
};

//숫자 관련 validation
const isNumber = (value) => {
  if (isNaN(value)) errorHandler(ERROR_MESSAGE.number.notNumber);
  return true;
};

const isValidUnit = (unit, value) => {
  if (value % unit !== 0) errorHandler(ERROR_MESSAGE.lotto.invalidUnit);
  return true;
};

const isPositive = (value) => {
  if (value < 0) errorHandler(ERROR_MESSAGE.number.notPositive);
  if (value === 0) errorHandler(ERROR_MESSAGE.number.notZero);
  return true;
};

const isInteger = (number) => {
  if (!Number.isInteger(number)) errorHandler(ERROR_MESSAGE.number.notInteger);
  return true;
};

const isTooLarge = (value) => {
  if (value > 1000000) errorHandler(ERROR_MESSAGE.number.tooLarge);
  return true;
};

//lotto 기능 관련 validation
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

const isValidRange = (number) => {
  if (number < 1 || number > 45) errorHandler(ERROR_MESSAGE.lotto.invalidRange);
  return true;
};

const nestedInput = (counter) => {
  if (counter >= 10) errorHandler(ERROR_MESSAGE.lotto.tooManyNested);
};

const isUniqueBonusBall = (bonusBall, numbers) => {
  if (numbers.includes(Number(bonusBall)))
    errorHandler(ERROR_MESSAGE.lotto.isDuplicated);
  return true;
};

export {
  isNumber,
  isValidUnit,
  isNotNull,
  isNotDuplicated,
  isValidLength,
  nestedInput,
  isPositive,
  isInteger,
  isTooLarge,
  isValidRange,
  isUniqueBonusBall,
};
