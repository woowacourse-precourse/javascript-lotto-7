import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/message.js";
import Validate from "./Validate.js";
import Output from "./Output.js";

class Input {
  static async getPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmountInput = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
        const purchaseAmount = Number(purchaseAmountInput);

        Validate.checkPurchaseAmount(purchaseAmount);

        return { purchaseAmount };
      } catch (error) {
        Output.printErrorMessage(error);
      }
    }
  }

  static async getLottoWinningNumbers() {
    while (true) {
      try {
        const lottoWinningNumberInput = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBER);

        const lottoWinningNumbers = new Set(lottoWinningNumberInput.split(",").map(Number));

        Validate.checkLottoNumbers([...lottoWinningNumbers]);

        return { lottoWinningNumbers };
      } catch (error) {
        Output.printErrorMessage(error);
      }
    }
  }

  static async getBonusNumber(lottoWinningNumber) {
    while (true) {
      try {
        const bonusNumberInput = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
        const bonusNumber = Number(bonusNumberInput);

        Validate.checkBonusNumber(bonusNumber, lottoWinningNumber);

        return { bonusNumber };
      } catch (error) {
        Output.printErrorMessage(error);
      }
    }
  }
}

export default Input;
