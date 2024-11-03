import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./utils/constants.js";

export default class WoowahanInput {

    static async getBuyMoney() {
        return await Console.readLineAsync(`${MESSAGES.BUY_MONEY_INPUT}`);
    }
    static async getWinNumber() {
        return await Console.readLineAsync(`${MESSAGES.WIN_NUMBER_INPUT}`);
    }
    static async getBonusNumber() {
        return await Console.readLineAsync(`${MESSAGES.BONUS_NUMBER_INPUT}`);
    }
}