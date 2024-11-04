import { DELIMITER, ERROR } from "../config/config.js";
import { convertNumber } from "./convertNumber.js";

export const parseNumbers = (strings) => {
  if (strings === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  const result = [];
  const numbers = strings.split(DELIMITER);
  if (numbers.length <= 1) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  for (let number of numbers) {
    result.push(convertNumber(number));
  }
  return result;
};
