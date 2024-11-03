import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./utils/constants.js";

class WoowahanOutput {
    async errorPrint(prompt) {
        Console.print(`[ERROR] ${prompt}`)
    }

    async statusPrint(prompt) {
        Console.print(`${prompt}`);
    }

    static print(prompt){
        Console.print(`${prompt}`);
    }
}

class GameOutput extends WoowahanOutput {
    async printLottoTicketCount(countLotto){
        super.statusPrint(`${countLotto}개를 구매했습니다.`);
    }

    static printLottoOneLine(random){
        super.print(`[${random.join(', ')}]`);
    }
}

class MyOutput extends WoowahanOutput {

    async printEmptyValue() {
        super.errorPrint(ERROR.BUY_MONEY_IS_NULL);
    }

    async printNotNumber() {
        super.errorPrint(ERROR.BUY_MONEY_NOT_NUMBER);
    }

    async printMinusNumber() {
        super.errorPrint(ERROR.BUY_MONEY_MINUS);
    }

    async printEndWith1000() {
        super.errorPrint(ERROR.BUY_MONEY_END_WITH_1000);
    }
}

export { MyOutput, GameOutput }