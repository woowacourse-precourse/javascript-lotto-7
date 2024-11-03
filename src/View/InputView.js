import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../Utils/message";
class Input {
    constructor() { }
    async readLottoPurchaseAmountInput() {
        Console.print(GAME_MESSAGES.purchaseAmount);
        const amount = await Console.readLineAsync();
        return amount;
    }
    async readLottoWinningNumbersInput() {
        Console.print(GAME_MESSAGES.winningNumbers);
        const winngNumbers = await Console.readLineAsync();
        return winngNumbers;
    }
    async readLottoBonusNumberInput() {
        Console.print(GAME_MESSAGES.bonusNumber);
        const bonusNumber = await Console.readLineAsync();
        return bonusNumber;
    }
}
export default Input;