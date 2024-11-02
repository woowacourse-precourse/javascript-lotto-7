import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./Constants.js";

class InputHandler {
    async askUserMoney() {
        const userMoney = await Console.readLineAsync(MESSAGES.INPUT.ASK_USER_MONEY);
        return userMoney;
    }

    async askWinningNumbers() {
        const winningNumbers = await Console.readLineAsync(MESSAGES.INPUT.ASK_WINNING_NUMBERS);
        return winningNumbers;
    }

    async askBonusNumber() {
        const bonusNumber = await Console.readLineAsync(MESSAGES.INPUT.ASK_BONUS_NUMBER);
        return bonusNumber;
    }
}

export default InputHandler;