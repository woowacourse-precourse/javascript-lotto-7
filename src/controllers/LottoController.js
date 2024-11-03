import { Console } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import InputValidator from "../validators/InputValidator.js";

class LottoController {
    constructor() {
        this.InputView = new InputView();
        this.outputView = new OutputView();
    }

    async start() {
        const inputAmount = await this.getValidatedInputAmount();
        const lottoCount = inputAmount / 1000;
        this.outputView.outputLottoCount(lottoCount);
    }

    async getValidatedInputAmount() {
        const inputAmount = await this.InputView.getInputAmount();
        InputValidator.isValidLottoAmount(inputAmount);
        return inputAmount;
    }
}

export default LottoController;