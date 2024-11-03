import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./utils/constants.js";

class WoowahanOutput {
    async print(prompt) {
        Console.print(`[ERROR] ${prompt}`)
    }
}

export default class MyOutput extends WoowahanOutput {

    async printEmptyValue() {
        super.print(ERROR.BUY_MONEY_IS_NULL);
    }

    async printNotNumber() {
        super.print(ERROR.BUY_MONEY_NOT_NUMBER);
    }

    async printMinusNumber() {
        super.print(ERROR.BUY_MONEY_MINUS);
    }

    async printEndWith1000() {
        super.print(ERROR.BUY_MONEY_END_WITH_1000);
    }
}