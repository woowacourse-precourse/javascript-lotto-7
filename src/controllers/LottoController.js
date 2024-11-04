import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import InputValidator from "../validators/InputValidator.js";
import LottoService from "../services/LottoService.js";
import { WINNING_CRITERIA, RANK_INDEX, MINIMUM_INDEX } from "../constants/Constants.js";


class LottoController {
    constructor() {
        this.InputView = new InputView();
        this.outputView = new OutputView();
        this.lottoService = new LottoService();
    }

    async start() {
        const inputAmount = await this.getValidatedInputAmount();
        const lottoCount = this.lottoService.getLottoCount(inputAmount);
        this.outputView.outputLottoCount(lottoCount);

        const lottos = this.lottoService.getGeneratedLottos(lottoCount);
        lottos.forEach((lotto) => this.outputView.outputLotto(lotto));

        const inputWinningNumbers = await this.getValidatedInputWinningNumbers();
        const inputBonusNumber = await this.getValidatedInputBonusNumber(inputWinningNumbers);

        this.outputView.outputStatistics();

        let winningRecord = await this.lottoService.getWinningRecord(lottos, inputWinningNumbers, inputBonusNumber);
        await this.getResult(WINNING_CRITERIA, winningRecord);

        const profitRate = await this.lottoService.getProfitRate(winningRecord, inputAmount);
        this.outputView.outputProfitRate(profitRate);
    }

    async getValidatedInputAmount() {
        const inputAmount = await this.InputView.getInputAmount();
        InputValidator.isValidLottoAmount(inputAmount);
        return inputAmount;
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

    async getResult(winningCriteria, winningRecord) {
        for (let i = RANK_INDEX; i >= MINIMUM_INDEX; i--) {
            const { message } = winningCriteria[i];
            this.outputView.outputResult(message, winningRecord[i]);
        }
    }
}

export default LottoController;
