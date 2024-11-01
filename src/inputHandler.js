import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "./constants/input.js";

class InputHandler {
  static async getCost() {
    const costInput = (await Console.readLineAsync(inputMessage.cost)).trim();
    const cost = Number(costInput);

    return cost;
  }
}

export default InputHandler;
