import { ERROR } from "../config/config.js";

export const convertNumber = (strings) => {
  const number = parseFloat(strings);

  if (Number.isNaN(number)) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  return Number(strings);
};
