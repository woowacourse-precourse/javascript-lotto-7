import { MissionUtils } from "@woowacourse/mission-utils";
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
        const lottoCount = this.getLottoCount(inputAmount);
        this.outputView.outputLottoCount(lottoCount);

        const lottos = this.getGeneratedLottos(lottoCount);
        lottos.forEach((lotto) => this.outputView.outputLotto(lotto));
    }

    async getValidatedInputAmount() {
        const inputAmount = await this.InputView.getInputAmount();
        InputValidator.isValidLottoAmount(inputAmount);
        return inputAmount;
    }

    getLottoCount(inputAmount) {
        return inputAmount / 1000;
    }

    getGeneratedLottos(lottoCount) {
        const lottos = [];
        for (let i = 0; i < lottoCount; i++) {
            const lotto = new Lotto(
                MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
            );
            lotto.sortASC();
            lottos.push(lotto);
        }

        return lottos;
    }
}

export default LottoController;
