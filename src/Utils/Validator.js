import { ERROR_MESSAGE, CONSTANTS } from "./Constants.js"

export class InputValidator {
    static purchaseAmountValidator(purchaseAmount) {
        if (purchaseAmount%CONSTANTS.LOTTO_PRICE != 0) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
        }
    }
}