import { Console } from "@woowacourse/mission-utils";
import { ERROR, SUBJECT } from "./utils/constants.js";

class WoowahanOutput {
    async errorPrint(subject, prompt) {
        Console.print(`[ERROR] ${subject}${prompt}`)
    }

    static print(prompt) {
        Console.print(`${prompt}`);
    }
}

class GameOutput extends WoowahanOutput {
    static printLottoTicketCount(countLotto) {
        super.print(`${countLotto}개를 구매했습니다.`);
    }

    static printLottoOneLine(random) {
        super.print(`[${random.join(', ')}]`);
    }
}

class BuyMoneyOutput extends WoowahanOutput {

    async printEmptyValue() {
        super.errorPrint(SUBJECT.BUY_MONEY, ERROR.IS_NULL);
    }

    async printNotNumber() {
        super.errorPrint(SUBJECT.BUY_MONEY, ERROR.NOT_NUMBER);
    }

    async printMinusNumber() {
        super.errorPrint(SUBJECT.BUY_MONEY, ERROR.MINUS);
    }

    async printEndWith1000() {
        super.errorPrint(SUBJECT.BUY_MONEY, ERROR.END_WITH_1000);
    }
}

class WinInputOutput extends WoowahanOutput {

    async printCountNotSix() {
        super.errorPrint(SUBJECT.WIN_NUMBER, ERROR.IS_NOT_SIX)
    }
}

class WinNumberOutput extends WoowahanOutput {

    async printEmptyValue() {
        super.errorPrint(SUBJECT.WIN_NUMBER, ERROR.IS_NULL);
    }

    async printNotNumber() {
        super.errorPrint(SUBJECT.WIN_NUMBER, ERROR.NOT_NUMBER);
    }

    async printMinusNumber() {
        super.errorPrint(SUBJECT.WIN_NUMBER, ERROR.MINUS);
    }

    async printOutOfRange() {
        super.errorPrint(SUBJECT.WIN_NUMBER, ERROR.OUT_OF_RANGE);
    }
}

export { BuyMoneyOutput, GameOutput, WinNumberOutput, WinInputOutput }