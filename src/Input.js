import { Console } from "@woowacourse/mission-utils";
import { INPUT_PROMPTS } from "./Constants.js";

class Input {
  static async getUserPurchaseAmount() {
    return await Console.readLineAsync(INPUT_PROMPTS.purchaseAmount);
  }

  static async getUserWinningNumber() {
    return await Console.readLineAsync(INPUT_PROMPTS.lottoNumber);
  }

  static async getUserBonusNumber() {
    return await Console.readLineAsync(INPUT_PROMPTS.bonusNumber);
  }
}

export default Input;
