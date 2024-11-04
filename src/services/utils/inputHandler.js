import {input} from "../../ui/input.js";
import {INPUT} from "../../constants/messages.js";
import {stringToNumber, stringToNumberArray} from "../../utils/conversionUtils.js";
import LottoMachine from "../LottoMachine.js";
import Lotto from "../Lotto.js";
import {errorOutput} from "../../ui/output.js";


export async function getPurchaseAmount() {
    while (true) {
        try {
            const purchaseAmount = await input(INPUT.PURCHASE);
            const purchaseNum = stringToNumber(purchaseAmount);
            const lottoMachine = new LottoMachine(purchaseNum);
            return {purchaseAmount, lottoMachine};
        } catch (e) {
            errorOutput(e.message);
        }
    }
}

export async function getWinningNumbers() {
    while (true) {
        try {
            const beforeWinningNumber = stringToNumberArray(await input(INPUT.WINNING_STATS));
            return new Lotto(beforeWinningNumber);
        } catch (e) {
            errorOutput(e.message);
        }
    }
}

export async function getBonusNumber(lotto) {
    while (true) {
        try {
            const bonusNum = stringToNumber(await input(INPUT.BONUS_NUM));
            lotto.bonusNumValidate(bonusNum)
            return bonusNum
        } catch (e) {
            errorOutput(e.message);
        }
    }
}
