import { inputAmount } from "./inputAmount.js";
import { outputHandler } from "../../handlers/outputHandler.js";

export const inputLotto = async () => {
  let amount;
  while (true) {
    try {
      amount = await inputAmount();
      break;
    } catch (e) {
      outputHandler(e.message);
    }
  }
  return amount;
};
