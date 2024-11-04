import OutputView from "../views/outputView.js";
import { ERROR_MESSAGE } from "../utils/message.js";

export default class LottoValidator {
  static validatePurchaseAmount(amount) {
    if (isNaN(amount)) {
      OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_ISNAN);
      return false;
    }

    if (amount % 1000 !== 0 || amount <= 0) {
      OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_PURCHASE);
      return false;
    }

    return true;
  }
}
