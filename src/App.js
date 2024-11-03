import {InputHandler} from "./utils/InputHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";
import {Console} from '@woowacourse/mission-utils'
import {lottoUtils} from "./utils/lotto.utils.js";
import {winningNumbersUtils} from "./utils/winningNumbers.utils.js";
import {bonusNumberUtils} from "./utils/bonusNumber.utils.js";

class App {
    async run() {
        try {
            const purchasePrice = await InputHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE, purchasePriceUtils.validate);
            const lottoAmount = purchasePriceUtils.getLottoAmount(purchasePrice);
            Console.print(INSTRUCTION.PRINT_LOTTO_AMOUNT(lottoAmount));

            const lottos = lottoUtils.generateNLottos(lottoAmount);
            lottos.map((lotto) => {
                lotto.print()
            })

            const winningNumbers = await InputHandler.getInput(INSTRUCTION.GET_WINNING_NUMBERS,
                winningNumbersUtils.validate,
                (str) => str.split(','));

            const bonusNumber = await InputHandler.getInput(INSTRUCTION.GET_BONUS_NUMBER,
                bonusNumberUtils.validate);
            bonusNumberUtils.validateWithWinningNumbers(bonusNumber, winningNumbers);

            const lottoResult = lottoUtils.getLottoMatchResultArray(lottos, winningNumbers, bonusNumber);

            let totalPrize = 0;
            Console.print(INSTRUCTION.PRINT_TOTAL_WINNING_STATISTICS);
            lottoResult.forEach((amount, index) => {
                lottoUtils.printWinningStatistics(index, lottoUtils.getPrize(index), amount)
                totalPrize += amount * lottoUtils.getPrize(index);
            })
            const profitRate = lottoUtils.calculateProfitRate(totalPrize, purchasePrice);
            Console.print(INSTRUCTION.PRINT_PROFIT_RATE(profitRate))
        } catch (error) {
            Console.print(error.message)
        }
    }
}

export default App;