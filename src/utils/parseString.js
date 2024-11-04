import { NUMBER_SEPARATOR } from "../constants/gameRules.js";

export const parseMoneyInput = (input) => {
  return Number(input.trim().replace(/[,\s]/g, ""));
};

export const parseInputToNumbers = (input) => {
  return input
    .trim()
    .replace(/[\s]/g, "")
    .split(NUMBER_SEPARATOR)
    .map((string) => Number(string));
};
