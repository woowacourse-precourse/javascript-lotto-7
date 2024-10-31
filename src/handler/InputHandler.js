import { Console } from "@woowacourse/mission-utils";
import LottoMoneyValidator from "../validator/LottoMoneyValidator.js";

class InputHandler {
    constructor() {
        this.lottoMoneyValidator = new LottoMoneyValidator();
    }

    async getLottoMoney() {
        try {
            const input = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
            const lottoMoney = this.lottoMoneyValidator.validateLottoMoney(parseInt(input.trim(), 10));
            return lottoMoney;
        } catch (error) {
            Console.print(error.message);
            return await this.getLottoMoney();
        }
    }
}

export default InputHandler;