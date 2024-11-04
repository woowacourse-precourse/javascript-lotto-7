import PurchaseAmount from "../models/PurchaseAmount.js";
import BonusNumber from "../models/BonusNumber.js";
import Lotto from "../models/Lotto.js";
import WinningNumbers from "../models/WinningNumbers.js";
import Prize from "../models/Prize.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";
import { PRIZE_MESSAGES } from "../constants/prizeMessages.js";

class LottoController {

    #purchaseLottosCount;

    #lottos;

    #winningNumbers;

    #bonusNumber;

    #prize;

    #rateReturn;

    async lottoProcess() {
        await this.getInputPurchaseAmount();
        this.getLottos();
        await this.getInputWinningNumbers();
        await this.getInputBonusNumber();
        this.getPrizeResult();
    }

    async getInputPurchaseAmount() {
        try {
            const INPUT_PURCHASE_AMOUNT = await InputView.inputReadLine(LOTTO_MESSAGES.input_purchase_amount);
            this.#purchaseLottosCount = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
            OutputView.outputEmptyPrintLine();
        } catch (error) {
            OutputView.outputPrint(error.message);
            return await this.getInputPurchaseAmount();
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
            return await this.getInputWinningNumbers();
        }
    }

    async getInputBonusNumber() {
        try {
            const INPUT_BONUS_NUMBER = await InputView.inputReadLine(LOTTO_MESSAGES.input_bonus_number);
            this.#bonusNumber = BonusNumber.getBonusNumber(INPUT_BONUS_NUMBER, this.#winningNumbers);
            OutputView.outputEmptyPrintLine();
        } catch (error) {
            OutputView.outputPrint(error.message);
            return await this.getInputBonusNumber();
        }
    }

    getPrizeResult() {
        const prize = new Prize(this.#lottos, this.#winningNumbers, this.#bonusNumber);
        this.#prize = prize.getPrize();
        OutputView.outputPrint(PRIZE_MESSAGES.output_winning_statistics);
        Object.values(this.#prize).reverse().forEach(({ count, price, condition }) => {
            OutputView.outputPrint(PRIZE_MESSAGES.output_prize_result(count, price, prize.getPrizeConditionText(condition)));
        });
        this.#rateReturn = prize.getRateReturn(this.#prize);
        OutputView.outputPrint(PRIZE_MESSAGES.output_rate_return(this.#rateReturn));
    }
}

export default LottoController;