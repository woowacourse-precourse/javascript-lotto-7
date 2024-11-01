import PurchaseAmount from "../models/PurchaseAmount.js";
import Lotto from "../models/Lotto.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";

class LottoController {

    #purchaseLottosCount;

    #lottos;

    async lottoProcess() {
        await this.getInputPurchaseAmount();
        this.getLottos();
    }

    async getInputPurchaseAmount() {
        const INPUT_PURCHASE_AMOUNT = await InputView.inputReadLine(LOTTO_MESSAGES.input_purchase_amount);
        this.#purchaseLottosCount = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
        OutputView.outputEmptyPrintLine();
    }

    getLottos() {
        OutputView.outputPrint(LOTTO_MESSAGES.output_purchase_lottos_count(this.#purchaseLottosCount));
        this.#lottos = Lotto.getLottos(this.#purchaseLottosCount);
        this.#lottos.forEach((lotto) => OutputView.outputPrint(Lotto.formatLottoNumbers(lotto)));
        OutputView.outputEmptyPrintLine();
    }
}

export default LottoController;