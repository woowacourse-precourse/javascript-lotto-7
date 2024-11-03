import { ERROR_MESSAGE, CONSTANTS } from "./Constants.js"

export class InputValidator {

    static purchaseAmountValidator(purchaseAmount) {
        if (purchaseAmount%CONSTANTS.LOTTO_PRICE != 0) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
        }
    }

    static winningNumberValidator(winningNumber) {
        if (winningNumber.length < CONSTANTS.LOTTO_NUMBER) {
            throw new Error(ERROR_MESSAGE.WINNING_NUMBER_LACK_ERROR);
        }

        if (winningNumber.length > CONSTANTS.LOTTO_NUMBER) {
            throw new Error(ERROR_MESSAGE.WINNING_NUMBER_EXEED_ERROR);
        }
    }
}