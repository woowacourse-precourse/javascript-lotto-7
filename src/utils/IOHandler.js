import {Console} from '@woowacourse/mission-utils'
import {INSTRUCTION} from "../constants/constants.js";
import {lottoUtils} from "./lotto.utils.js";

export const IOHandler = {
    async getInput(instruction, process) {
        let input = await Console.readLineAsync(instruction)

        if (process)
            input = process(input);

        return input
    },
    printLottoArray(lottos) {
        lottos.map(lotto => {
            Console.print(lotto.toString())
        })
    },
    printWinningStatistics(matchNumber, prize, matchAmount) {
        if (matchNumber < 3) return
        if (matchNumber === 6) { //2등 ( 5개 + 보너스 번호 )
            Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber - 1, lottoUtils.makeMoneyFormat(prize), matchAmount, INSTRUCTION.EXTRA_MESSAGE_SECOND_PRIZE))
            return
        }
        if (matchNumber === 7) { // 1등 ( 2등과 구분을 위해 맞은번호(6개) + 1개 = 7 )
            Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber - 1, lottoUtils.makeMoneyFormat(prize), matchAmount))
            return
        }
        Console.print(INSTRUCTION.PRINT_WINNING_STATISTICS(matchNumber, lottoUtils.makeMoneyFormat(prize), matchAmount))
    },
    printWinningStatisticsAll(lottoGame) {
        Console.print(INSTRUCTION.PRINT_TOTAL_WINNING_STATISTICS);
        lottoGame.getLottoMatchResultArray().forEach((amount, index) => {
            this.printWinningStatistics(index, lottoUtils.getPrize(index), amount)
        })
    },
    printProfitRate(profitRate) {
        const formattedRate = `${profitRate.toFixed(1)}%`;
        Console.print(INSTRUCTION.PRINT_PROFIT_RATE(formattedRate))
    },
    printLottoAmount(lottoAmount) {
        Console.print(INSTRUCTION.PRINT_LOTTO_AMOUNT(lottoAmount));
    }
}