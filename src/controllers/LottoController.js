import { Console } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";

class LottoController {
    constructor() {
        this.view = new InputView();
    }

    async start() {
        const inputAmount = await this.view.getInputAmount();
    }
}

export default LottoController;