import {IOHandler} from "./utils/IOHandler.js";
import {INSTRUCTION} from "./constants/constants.js";
import {purchasePriceUtils} from "./utils/purchasePrice.utils.js";
import {Console} from '@woowacourse/mission-utils'
import {lottoUtils} from "./utils/lotto.utils.js";
import {
    bonusNumbersValidate, bonusNumbersValidateWithWinningNumber,
    purchasePriceValidate,
    validator,
    winningNumbersValidate
} from "./validation/validator.js";

class App {
    async run() {
        try {
            const purchasePrice = await IOHandler.getInput(INSTRUCTION.GET_PURCHASE_PRICE, purchasePriceValidate);
            const lottoAmount = purchasePriceUtils.getLottoAmount(purchasePrice);
            Console.print(INSTRUCTION.PRINT_LOTTO_AMOUNT(lottoAmount));
            const lottos = lottoUtils.generateNLottos(lottoAmount);
            IOHandler.printLottoArray(lottos)

            const winningNumbers = await IOHandler.getInput(INSTRUCTION.GET_WINNING_NUMBERS, winningNumbersValidate, (str) => str.split(','));
            const bonusNumber = await IOHandler.getInput(INSTRUCTION.GET_BONUS_NUMBER, bonusNumbersValidate);
            bonusNumbersValidateWithWinningNumber(bonusNumber, winningNumbers);

            lottoUtils.checkResult(lottos, winningNumbers, bonusNumber, purchasePrice);
        } catch (error) {
            Console.print(error.message)
        }
    }
}

export default App;