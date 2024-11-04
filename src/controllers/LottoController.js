import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import InputValidator from "../validators/InputValidator.js";
import { WINNING_CRITERIA, THOUSAND_UNIT, HUNDRED_PERCENT, MINIMUM_INDEX, PICK_AMOUNT, RANK_INDEX } from "../constants/Constants.js";

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
        return inputAmount / THOUSAND_UNIT;
    }

    getGeneratedLottos(lottoCount) {
        const lottos = Array.from({ length: lottoCount }, () => new Lotto());
        return lottos;
    }

    async getValidatedInputWinningNumbers() {
        const inputWinningNumbers = await this.InputView.getInputWinningNumbers();

        try {
            return InputValidator.isValidWinningNumbers(inputWinningNumbers);
        } catch (error) {
            this.outputView.outputErrorMessage(error.message);
            return this.getValidatedInputWinningNumbers();
        }
    }

    async getValidatedInputBonusNumber(inputWinningNumbers) {
        const inputBonusNumber = await this.InputView.getInputBonusNumber();

        try {
            return InputValidator.isValidBonusNumber(inputBonusNumber, inputWinningNumbers);
        } catch (error) {
            this.outputView.outputErrorMessage(error.message);
            return this.getValidatedInputBonusNumber(inputWinningNumbers);
        }
    }

    async getWinningRecord(lottos, inputWinningNumbers, inputBonusNumber) {
        let winningRecord = Array(PICK_AMOUNT).fill(0);
        lottos.forEach((lotto) => {
            winningRecord[lotto.convertRank(inputWinningNumbers, inputBonusNumber)]++;
        });
        return winningRecord;
    }

    async getResult(winningCriteria, winningRecord) {
        for (let i = RANK_INDEX; i >= MINIMUM_INDEX; i--) {
            const { message } = winningCriteria[i];
            this.outputView.outputResult(message, winningRecord[i]);
        }
    }

    async getProfitRate(winningRecord, inputAmount) {
        let profitRate = 0;
        for (let i = RANK_INDEX; i >= MINIMUM_INDEX; i--) {
            profitRate += winningRecord[i] * WINNING_CRITERIA[i].price;
        }

        return (profitRate / inputAmount) * HUNDRED_PERCENT;
    }
}

export default LottoController;
