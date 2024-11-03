import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/Messages.js";

class InputView {
    async getInputAmount() {
        return await Console.readLineAsync(CONSOLE_MESSAGE.INPUT_AMOUNT);
    }
}

export default InputView;