import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGES from "./MESSAGES.js";
import inputValidator from "./inputValidator.js";

const inputHandler = {
  async requestPurchaseAmount() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync(
      MESSAGES.REQUEST_PURCHASE_AMOUNT
    );
    return inputValidator.checkPurchaseAmount(purchaseAmount);
  },

  async requestWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      MESSAGES.REQUEST_WINNING_NUMBER
    );
    return inputValidator.checkWinningNumbers(winningNumbers);
  },

  async requestBonusNumber(winningNumbers) {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      MESSAGES.REQUEST_BONUS_NUMBER
    );
    return inputValidator.checkBonusNumber(bonusNumber, winningNumbers);
  },
};

export default inputHandler;
