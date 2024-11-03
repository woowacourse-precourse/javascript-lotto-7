import {INSTRUCTION, LOTTO} from "../constants/constants.js";
import {Random, Console} from '@woowacourse/mission-utils';
import Lotto from "../Lotto.js";
import {IOHandler} from "./IOHandler.js";

export const lottoUtils = {
    generateNLottos(n) {
        let lottos = []
        Array(n).fill().map(() => {
            const lotto = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE)
            lottos.push(new Lotto(lotto.sort((a, b) => a - b)))
        })
        return lottos;
    },
    getLottoMatchResultArray(lottos, winningNumbers, bonusNumber) {
        let lottoResult = Array(8).fill(0);
        lottos.forEach((lotto) => {
            const matchNumber = lotto.getLottoResult(winningNumbers, bonusNumber);
            lottoResult[matchNumber]++
        })
        return lottoResult;
    },
    getPrize(matchNumber) {
        switch (matchNumber) {
            case 7:
                return LOTTO.FIRST_PRIZE
            case 6:
                return LOTTO.SECOND_PRIZE
            case 5:
                return LOTTO.THIRD_PRIZE
            case 4:
                return LOTTO.FOURTH_PRIZE
            case 3:
                return LOTTO.FIFTH_PRIZE
            default:
                return 0
        }
    },
    makeMoneyFormat(money, separator = ",") {
        return money.toString().split("").reverse().join("")
            .replace(/(.{3})(?=.)/g, `$1${separator}`)
            .split("").reverse().join("");
    },
    calculateProfitRate(profit, purchasePrice) {
        const profitRate = profit / purchasePrice * 100;
        return Math.round(profitRate * 100) / 100;
    },
    calculateTotalPrize(lottoResult){
        let totalPrize = 0;
        lottoResult.forEach((amount, index) => {
            totalPrize += amount * lottoUtils.getPrize(index);
        })
        return totalPrize;
    },
    checkResult(lottos, winningNumbers, bonusNumber, purchasePrice) {
        const lottoResult = lottoUtils.getLottoMatchResultArray(lottos, winningNumbers, bonusNumber);

        let totalPrize = lottoUtils.calculateTotalPrize(lottoResult);
        IOHandler.printWinningStatisticsAll(lottoResult);

        const profitRate = lottoUtils.calculateProfitRate(totalPrize, purchasePrice);

        const formattedRate = `${profitRate.toFixed(1)}%`;
        Console.print(INSTRUCTION.PRINT_PROFIT_RATE(formattedRate))
    }

}