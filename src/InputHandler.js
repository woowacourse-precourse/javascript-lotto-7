import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./Constants.js";
import { validateMoney, validateWinningNumbers, validateBonusNumber } from "./Validator.js";

class InputHandler {
    async askUserMoney() {
        try {
            const userMoney = await Console.readLineAsync(MESSAGES.INPUT.ASK_USER_MONEY);
            validateMoney(userMoney);
            return userMoney;
        } catch (error) {
            Console.print(error.message);
            return this.askUserMoney();
        }
    }

    async askWinningNumbers() {
        try {
            const winningNumbers = await Console.readLineAsync(MESSAGES.INPUT.ASK_WINNING_NUMBERS);
            validateWinningNumbers(winningNumbers);
            return winningNumbers;
        } catch (error) {
            Console.print(error.message);
            return this.askWinningNumbers();
        }
    }

    async askBonusNumber(winningNumbers) {
        try {
            const bonusNumber = await Console.readLineAsync(MESSAGES.INPUT.ASK_BONUS_NUMBER);
            validateBonusNumber(winningNumbers, bonusNumber);
            return parseInt(bonusNumber, 10);
        } catch (error) {
            Console.print(error.message);
            return this.askBonusNumber(winningNumbers);
        }
    }
}

export default InputHandler;