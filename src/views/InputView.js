import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/Messages.js";

class InputView {
    async getInputAmount() {
        return await Console.readLineAsync(CONSOLE_MESSAGE.INPUT_AMOUNT);
    }

    async getInputWinningNumbers () {
        return await Console.readLineAsync(CONSOLE_MESSAGE.INPUT_WINNING_NUMBERS);
    }

    async getInputBonusNumber () {
        return await Console.readLineAsync(CONSOLE_MESSAGE.INPUT_BONUS_NUMBER);
    }
}

export default InputView;