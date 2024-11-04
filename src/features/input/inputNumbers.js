import { ERROR, MESSAGES } from "../../config/config.js";
import { inputHandler } from "../../handlers/inputHandler.js";
import { parseNumbers } from "../parseNumbers.js";

export const inputNumbers = async () => {
  const numbers = await inputHandler(MESSAGES.INPUT_WIN_NUM);
  let numberList = [];

  if (numbers === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  try {
    numberList = parseNumbers(numbers);
  } catch (e) {
    throw new Error(e.message);
  }

  return numberList;
};
