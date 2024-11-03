import { Console } from "@woowacourse/mission-utils";
import { CONSTANT, ERROR, SUBJECT } from "./utils/constants.js";

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

    static printWinningStatistics() {
        super.print(CONSTANT.WINNING_STATISTICS);
    }
    
    static printGeneralRanking(sameCount, winPrize, ticketCount){
        super.print(`${sameCount}개 일치 (${winPrize}원) - ${ticketCount}개`);
    }

    static printBonusRanking(winPrize, fiveEqualWithBonusCount){
        super.print(`5개 일치, 보너스 볼 일치 (${winPrize}원) - ${fiveEqualWithBonusCount}개`);
    }

    static printTotalReturn(earn, buyMoney) { 
        super.print(`총 수익률은 ${(earn / Number(buyMoney) * 100).toFixed(1)}%입니다.`);
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

class BonusNumberOutput extends WoowahanOutput {

    async printEmptyValue() {
        super.errorPrint(SUBJECT.BONUS_NUMBER, ERROR.IS_NULL);
    }

    async printNotNumber() {
        super.errorPrint(SUBJECT.BONUS_NUMBER, ERROR.NOT_NUMBER);
    }

    async printMinusNumber() {
        super.errorPrint(SUBJECT.BONUS_NUMBER, ERROR.MINUS);
    }

    async printOutOfRange() {
        super.errorPrint(SUBJECT.BONUS_NUMBER, ERROR.OUT_OF_RANGE);
    }
}

export { BuyMoneyOutput, GameOutput, WinNumberOutput, WinInputOutput, BonusNumberOutput }