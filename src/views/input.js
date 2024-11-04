import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";
import numberValidator from "../validators/numberValidator.js";
import arrayValidator from "../validators/arrayValidator.js";
import convertNumbersToArray from "../utils/convertNumbersToArray.js";

const input = {
  async purchasePrice() {
    const purchasePriceString = await Console.readLineAsync(MESSAGES.PURCHASE_PRICE);
    const purchasePrice = parseInt(purchasePriceString);
    numberValidator.nan(purchasePrice);
    numberValidator.negative(purchasePrice);
    return purchasePrice;
  },

  async winningLotto() {
    const winningLottoString = await Console.readLineAsync(MESSAGES.WINNING_LOTTO);
    const winningLotto = convertNumbersToArray(winningLottoString);

    arrayValidator.length(winningLotto);
    arrayValidator.inRange(winningLotto);
    arrayValidator.duplicate(winningLotto);
    return winningLotto;
  },

  async bonusNumber() {
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
  },
};

export default input;
