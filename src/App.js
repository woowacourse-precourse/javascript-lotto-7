import {InputHandler} from "./utils/InputHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";
import {Console} from '@woowacourse/mission-utils'
import {lottoUtils} from "./utils/lotto.utils.js";
import {winningNumbersUtils} from "./utils/winningNumbers.utils.js";

class App {
    async run() {
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
    }
}

export default App;