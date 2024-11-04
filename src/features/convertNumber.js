import { ERROR } from "../config/config.js";

export const convertNumber = (strings) => {
  if (isNaN(strings)) {
    throw new Error(ERROR.NOT_NUMBER);
  }

  return Number(strings);
};
