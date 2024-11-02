import { DELIMITER } from "../config/config.js";
import { convertNumber } from "./convertNumber.js";

export const parseNumbers = (strings) => {
  const numbers = strings.split(DELIMITER);
  const result = [];

  for (let number of numbers) {
    result.push(convertNumber(number));
  }
  return result;
};
