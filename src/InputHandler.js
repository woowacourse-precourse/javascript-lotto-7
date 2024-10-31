import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, DIVISORS } from "./Constants.js";
import { validateMoney } from "./Validator.js";

class InputHandler {
    async askUserMoney() {
        const userMoney = await Console.readLineAsync(MESSAGES.INPUT.ASK_USER_MONEY);
        const validatedMoney =  validateMoney(userMoney);
        return validatedMoney
    }
}

export default InputHandler;