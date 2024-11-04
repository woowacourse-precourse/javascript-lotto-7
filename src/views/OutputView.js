import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PRIZES } from "../Constants/PrizeOfConstant.js";

const OutputView = {
    writeLottoCounts(countGame) {
        Console.print(`\n${countGame}개를 구매했습니다.`);
    },

    writeLottos(lottos) {
        for (let index = 0; index < lottos.length; index++) {
            Console.print(`[${this.writeLottoNumbers(lottos[index])}]`);
        }
    },

    writeLottoNumbers(lotto) {
        return lotto.getNumbers().join(", ");
    },

    writeMatchStatistics(matchResult, matchFiveNumbersWithBonusNumber) {
        this.writeHeader();
        this.writePrizeResults(matchResult, matchFiveNumbersWithBonusNumber);
    },

    writeHeader() {
        Console.print("\n당첨 통계\n---");
    },

    writePrizeResults(matchResult, matchFiveNumbersWithBonusNumber) {
        this.writePrize(LOTTO_PRIZES.THREE, matchResult[3]);
        this.writePrize(LOTTO_PRIZES.FOUR, matchResult[4]);
        this.writePrize(LOTTO_PRIZES.FIVE, matchResult[5] - matchFiveNumbersWithBonusNumber);
        this.writePrize(LOTTO_PRIZES.FIVE_BONUS, matchFiveNumbersWithBonusNumber);
        this.writePrize(LOTTO_PRIZES.SIX, matchResult[6]);
    },

    writePrize(prizeInfo, count) {
        Console.print(
            `${prizeInfo.message} (${this.formatPrize(prizeInfo.prize)}원) - ${count}개`
        );
    },

    formatPrize(prize) {
        return prize.toLocaleString();
    },

    writeRateOfReturn(matchResult, matchFiveNumbersWithBonusNumber, moneyPaid) {
        const rateOfReturn = this.calculateRateOfReturn(
            this.calculateTotalPrize(matchResult, matchFiveNumbersWithBonusNumber),
            moneyPaid
        );
        this.printRateOfReturn(rateOfReturn);
    },

    calculateTotalPrize(matchResult, matchFiveNumbersWithBonusNumber) {
        return (
            LOTTO_PRIZES.THREE.prize * matchResult[3] +
            LOTTO_PRIZES.FOUR.prize * matchResult[4] +
            LOTTO_PRIZES.FIVE.prize * (matchResult[5] - matchFiveNumbersWithBonusNumber) +
            LOTTO_PRIZES.FIVE_BONUS.prize * matchFiveNumbersWithBonusNumber +
            LOTTO_PRIZES.SIX.prize * matchResult[6]
        );
    },

    calculateRateOfReturn(totalPrize, moneyPaid) {
        return Math.round((totalPrize / moneyPaid) * 100) / 100;
    },

    printRateOfReturn(rateOfReturn) {
        Console.print(
            `총 수익률은 ${rateOfReturn.toLocaleString('ko-KR')}%입니다.`
        );
    }
}

export default OutputView;