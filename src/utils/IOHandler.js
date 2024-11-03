import {Console} from '@woowacourse/mission-utils'
import {INSTRUCTION} from "../constants/constants.js";
import {lottoUtils} from "./lotto.utils.js";

export const IOHandler = {
    async getInput(instruction, validator = (x) => x, process = (x) => x) {
        const input = await Console.readLineAsync(instruction)
        return validator(process(input))
    },
    printLottoArray(lottos){
        lottos.map(lotto => {
            lotto.print()
        })
    },
    printWinningStatistics(matchNumber, prize, matchAmount) {
        if (matchNumber < 3) return
        if (matchNumber === 6) {
            Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber - 1, lottoUtils.makeMoneyFormat(prize), matchAmount, INSTRUCTION.EXTRA_MESSAGE_SECOND_PRIZE))
            return
        }
        if (matchNumber === 7) {
            Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber - 1, lottoUtils.makeMoneyFormat(prize), matchAmount))
            return
        }
        Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber, lottoUtils.makeMoneyFormat(prize), matchAmount))
    },
    printWinningStatisticsAll(lottoResult){
        Console.print(INSTRUCTION.PRINT_TOTAL_WINNING_STATISTICS);
        lottoResult.forEach((amount, index) => {
            this.printWinningStatistics(index, lottoUtils.getPrize(index), amount)
        })
    }
}