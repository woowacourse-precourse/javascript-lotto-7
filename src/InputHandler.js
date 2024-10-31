import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "./Constants.js";

class InputHandler {
    async askUserMoney() {
        return await Console.readLineAsync(INPUT_MESSAGES.ASK_USER_MONEY);
    }
}

export default InputHandler;



