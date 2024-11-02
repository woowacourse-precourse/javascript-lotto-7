import { Console } from "@woowacourse/mission-utils";
import { PROMPTS } from "../constants/constants.js";

const Input = {
  async purchaseAmount() {
    const input = await Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);
    return input.trim();
  },
};

export default Input;
