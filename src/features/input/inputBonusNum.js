import { outputHandler } from "../../handlers/outputHandler.js";
import { inputBonus } from "./inputBonus.js";

export const inputBonusNum = async (winningNumbers) => {
  let bonus;
  while (true) {
    try {
      bonus = await inputBonus(winningNumbers);
      break;
    } catch (e) {
      outputHandler(e.message);
    }
  }
  return bonus;
};
