import PurchaseAmount from "../models/PurchaseAmount.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";

class LottoController {

    #purchaseLottosCount;

    async lottoProcess() {
        await this.getInputPurchaseAmount();
    }

    async getInputPurchaseAmount() {
        const INPUT_PURCHASE_AMOUNT = await InputView.inputReadLine(LOTTO_MESSAGES.input_purchase_amount);
        this.#purchaseLottosCount = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
        OutputView.outputEmptyPrintLine();
    }
}

export default LottoController;