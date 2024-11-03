import { ERROR_MESSAGE, CONSTANTS } from "./Constants"

export class InputValidator {
    static purchaseAmountValidator(purchaseAmount) {
        if (purchaseAmount%CONSTANTS.LOTTO_PRICE != 0) {
            throw new Error();
        }
    }
}