import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import InputValidator from "../validators/InputValidator.js";
import { WINNING_CRITERIA } from "../constants/Messages.js";

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

        const inputWinningNumbers = await this.getValidatedInputWinningNumbers();
        const inputBonusNumber = await this.getValidatedInputBonusNumber(inputWinningNumbers);

        this.outputView.outputStatistics();

        let winningRecord = await this.getWinningRecord(lottos, inputWinningNumbers, inputBonusNumber);
        await this.getResult(WINNING_CRITERIA, winningRecord);

        const profitRate = await this.getProfitRate(winningRecord, inputAmount);
        this.outputView.outputProfitRate(profitRate);
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

    async getValidatedInputWinningNumbers() {
        const inputWinningNumbers =
            await this.InputView.getInputWinningNumbers();

        try {
            InputValidator.isValidWinningNumbers(inputWinningNumbers);
            return inputWinningNumbers
                .split(",")
                .map((num) => Number(num.trim()));
        } catch (error) {
            this.outputView.outputErrorMessage(error.message);
            return this.getValidatedInputWinningNumbers();
        }
    }

    async getValidatedInputBonusNumber(inputWinningNumbers) {
        const inputBonusNumber = await this.InputView.getInputBonusNumber();

        try {
            InputValidator.isValidBonusNumber(
                inputBonusNumber,
                inputWinningNumbers
            );
            return inputBonusNumber;
        } catch (error) {
            this.outputView.outputErrorMessage(error.message);
            return this.getValidatedInputBonusNumber(inputWinningNumbers);
        }
    }

    async getWinningRecord(lottos, inputWinningNumbers, inputBonusNumber) {
        let winningRecord = [0, 0, 0, 0, 0, 0];
        lottos.forEach((lotto) => {
            winningRecord[lotto.convertRank(inputWinningNumbers, inputBonusNumber)]++;
        });
        return winningRecord;
    }

    async getResult(winningCriteria, winningRecord) {
        for (let i = 5; i >= 1; i--) {
            const { message } = winningCriteria[i];
            this.outputView.outputResult(message, winningRecord[i]);
        }
    }

    async getProfitRate(winningRecord, inputAmount) {
        let profitRate = 0;
        for (let i = 5; i >= 1; i--) {
            profitRate += winningRecord[i] * WINNING_CRITERIA[i].price;
        }

        return (profitRate / inputAmount) * 100;
    }
}

export default LottoController;
