import {IOHandler} from "./utils/IOHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";
import {Console} from '@woowacourse/mission-utils'
import {lottoUtils} from "./utils/lotto.utils.js";
import {
    purchasePriceValidate,
} from "./validation/validator.js";
import LottoGame from "./Models/LottoGame.js";

class App {
    async run() {
        try {
            const purchasePrice = await IOHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE);
            purchasePriceValidate(purchasePrice);

            const lottoAmount = purchasePriceUtils.getLottoAmount(purchasePrice);
            IOHandler.printLottoAmount(lottoAmount);
            const lottos = lottoUtils.generateNLottos(lottoAmount);
            IOHandler.printLottoArray(lottos)

            const winningNumbers = await IOHandler.getInput(INSTRUCTION.GET_WINNING_NUMBERS, (str) => str.split(','));
            const bonusNumber = await IOHandler.getInput(INSTRUCTION.GET_BONUS_NUMBER);

            const lottoGame = new LottoGame(winningNumbers, bonusNumber, lottos);
            IOHandler.printWinningStatisticsAll(lottoGame)
            IOHandler.printProfitRate(lottoGame.calculateProfitRate(purchasePrice))

        } catch (error) {
            Console.print(error.message)
        }
    }
}

export default App;