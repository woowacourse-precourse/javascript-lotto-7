import {InputHandler} from "./utils/InputHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";
import {Console} from '@woowacourse/mission-utils'

class App {
    async run() {
        const purchasePrice = await InputHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE, purchasePriceUtils.validate);
        const lottoAmount = purchasePriceUtils.getLottoAmount(purchasePrice);
        Console.print(INSTRUCTION.PRINT_LOTTO_AMOUNT(lottoAmount));
    }
}

export default App;