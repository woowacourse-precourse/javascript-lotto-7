import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./utils/constants.js";
import { bonusNumberValidator, buyMoneyValidator, winInputValidator, winNumberValidator } from "./utils/validators.js";

export default class WoowahanInput {

    static async getBuyMoney() {
        let isBuyMoneyValidate = true;
        let buyMoney = 0;

        while (isBuyMoneyValidate) {
            buyMoney = await Console.readLineAsync(`${MESSAGES.BUY_MONEY_INPUT}`);
            isBuyMoneyValidate = !buyMoneyValidator(buyMoney);
        }

        return buyMoney;
    }

    static async getWinNumber() {
        let isWinNumberValidate = true;
        let winNumber = [];

        while (isWinNumberValidate) {
            const winInput = await Console.readLineAsync(`${MESSAGES.WIN_NUMBER_INPUT}`);
            winNumber = winInput.split(',').map(Number);
            if (!winInputValidator(winNumber)) continue;
            isWinNumberValidate = winNumber.some((number) => !winNumberValidator(number));
        }

        return winNumber;
    }
    
    static async getBonusNumber() {
        let isBonusNumberValidate = true;
        let bonusNumber = 0;

        while (isBonusNumberValidate) {
            const inputBonus = await Console.readLineAsync(`${MESSAGES.BONUS_NUMBER_INPUT}`);
            bonusNumber = Number(inputBonus);
            isBonusNumberValidate = !bonusNumberValidator(bonusNumber);
        }

        return bonusNumber;
    }
}