import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";
import numberValidator from "../validators/numberValidator.js";
import arrayValidator from "../validators/arrayValidator.js";
import convertNumbersToArray from "../utils/convertNumbersToArray.js";

const input = {
  async purchasePrice() {
    try {
      const purchasePriceString = await Console.readLineAsync(MESSAGES.PURCHASE_PRICE);
      const purchasePrice = parseInt(purchasePriceString);
      numberValidator.nan(purchasePrice);
      numberValidator.negative(purchasePrice);
      return purchasePrice;
    } catch (error) {
      throw error;
    }
  },

  async winningLotto() {
    try {
      const winningLottoString = await Console.readLineAsync(MESSAGES.WINNING_LOTTO);
      const winningLotto = convertNumbersToArray(winningLottoString);

      arrayValidator.length(winningLotto);
      arrayValidator.inRange(winningLotto);
      arrayValidator.duplicate(winningLotto);
      return winningLotto;
    } catch (error) {
      throw error;
    }
  },

  async bonusNumber(winningNumberArray) {
    try {
      const bonusNumberString = await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
      const bonusNumber = parseInt(bonusNumberString);

      numberValidator.nan(bonusNumber);
      numberValidator.negative(bonusNumber);
      numberValidator.integer(bonusNumber);
      numberValidator.max(bonusNumber);
      arrayValidator.containNum(winningNumberArray, bonusNumber);
    } catch (error) {
      throw error;
    }
  },
};

export default input;
