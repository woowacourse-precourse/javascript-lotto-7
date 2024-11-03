import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./utils/constants";

export default class WoowahanInput {

    static async getBuyMoney() {
        await Console.readLineAsync(`${MESSAGES.BUY_MONEY_INPUT}`);
    }
    static async getWinNumber() {
        await Console.readLineAsync(`${MESSAGES.WIN_NUMBER_INPUT}`);
    }
    static async getBonusNumber() {
        await Console.readLineAsync(`${MESSAGES.BONUS_NUMBER_INPUT}`);
    }
}