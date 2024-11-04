import { inputNumbers } from "./inputNumbers.js";
import { outputHandler } from "../../handlers/outputHandler.js";

export const inputLottoNum = async () => {
  let numbers;
  while (true) {
    try {
      numbers = await inputNumbers();
      break;
    } catch (e) {
      outputHandler(e.message);
    }
  }
  return numbers;
};
