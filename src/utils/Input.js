import { Console } from "@woowacourse/mission-utils";
import { PROMPTS } from "../constants/constants.js";

const Input = {
  async purchaseAmount() {
    const input = await Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);
    return input.trim();
  },

  async winningNumbers() {
    const input = await Console.readLineAsync(PROMPTS.WINNING_NUMBERS);
    return input.trim();
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(PROMPTS.BONUS_NUMBER);
    return input.trim();
  },
};

export default Input;
