import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";
import numberValidator from "../validators/numberValidator.js";

const input = {
  async purchasePrice() {
    const purchasePrice = await Console.readLineAsync(MESSAGES.PURCHASE_PRICE);
    numberValidator.nan(purchasePrice);
    numberValidator.negative(purchasePrice);
    return purchasePrice;
  },

  async winningLotto() {
    const winningLotto = await Console.readLineAsync(MESSAGES.WINNING_LOTTO);
    return winningLotto.split(",");
  },

  async bonusNumber() {
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
  },
};

export default input;
