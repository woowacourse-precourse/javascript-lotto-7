import PurchaseAmount from "../models/PurchaseAmount.js";
import BonusNumber from "../models/BonusNumber.js";
import Lotto from "../models/Lotto.js";
import WinningNumbers from "../models/WinningNumbers.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";

class LottoController {

    #purchaseLottosCount;

    #lottos;

    #winningNumbers;

    #bonusNumber;

    async lottoProcess() {
        await this.getInputPurchaseAmount();
        this.getLottos();
        await this.getInputWinningNumbers();
        await this.getInputBonusNumber();
    }

    async getInputPurchaseAmount() {
        try {
            const INPUT_PURCHASE_AMOUNT = await InputView.inputReadLine(LOTTO_MESSAGES.input_purchase_amount);
            this.#purchaseLottosCount = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
            OutputView.outputEmptyPrintLine();
        } catch (error) {
            OutputView.outputPrint(error.message);
            await this.getInputPurchaseAmount();
        }
    }

    getLottos() {
        OutputView.outputPrint(LOTTO_MESSAGES.output_purchase_lottos_count(this.#purchaseLottosCount));
        this.#lottos = Lotto.getLottos(this.#purchaseLottosCount);
        this.#lottos.forEach((lotto) => OutputView.outputPrint(Lotto.formatLottoNumbers(lotto)));
        OutputView.outputEmptyPrintLine();
    }

    async getInputWinningNumbers() {
        try {
            const INPUT_WINNING_NUMBERS = await InputView.inputReadLine(LOTTO_MESSAGES.input_winning_numbers);
            this.#winningNumbers = WinningNumbers.getWinningNumbers(INPUT_WINNING_NUMBERS);
            OutputView.outputEmptyPrintLine();
        } catch (error) {
            OutputView.outputPrint(error.message);
            await this.getInputWinningNumbers();
        }
    }

    async getInputBonusNumber() {
        try {
            const INPUT_BONUS_NUMBER = await InputView.inputReadLine(LOTTO_MESSAGES.input_bonus_number);
            this.#bonusNumber = BonusNumber.getBonusNumber(INPUT_BONUS_NUMBER, this.#winningNumbers);
            OutputView.outputEmptyPrintLine();
        } catch (error) {
            OutputView.outputPrint(error.message);
            await this.getInputBonusNumber();
        }            
    }
}

export default LottoController;