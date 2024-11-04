import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, CONSTANTS } from "./Constants.js"

export class InputValidator {

    static hasDuplicates(arr) {
        return new Set(arr).size !== arr.length;
    }

    static purchaseAmountValidator(purchaseAmount) {

        if (isNaN(purchaseAmount)) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_NUMBER_ERROR);
        }

        if (purchaseAmount % CONSTANTS.LOTTO_PRICE != 0) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
        }
    }

    static winningNumberValidator(winningNumber) {
        if (winningNumber.length < CONSTANTS.NUMBER_OF_LOTTO_NUMBER) {
            throw new Error(ERROR_MESSAGE.WINNING_NUMBER_LACK_ERROR);
        }

        if (winningNumber.length > CONSTANTS.NUMBER_OF_LOTTO_NUMBER) {
            throw new Error(ERROR_MESSAGE.WINNING_NUMBER_EXEED_ERROR);
        }

        if (this.hasDuplicates(winningNumber)) {
            throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATION_ERROR);
        }

        winningNumber.map(number => {
            if (isNaN(number)) {
                throw new Error(ERROR_MESSAGE.WINNING_NUMBER_NOT_NUMBER_ERROR)
            }

            if (number < CONSTANTS.MIN_NUMBER || number > CONSTANTS.MAX_NUMBER) {
                throw new Error(ERROR_MESSAGE.WINNING_NUMBER_RANGE_ERROR)
            }
        })
    }

    static bonusNumberValidator(bonusNumber, winningNumber) {

        if (bonusNumber.length == 1 && bonusNumber[0] == '') {
            throw new Error(ERROR_MESSAGE.BONUS_NUMBER_LACK_ERROR);
        }

        if (bonusNumber.length > CONSTANTS.NUMBER_OF_BONUS_NUMBER) {
            throw new Error(ERROR_MESSAGE.BONUS_NUMBER_EXEED_ERROR);
        }

        if (winningNumber.includes(bonusNumber[0])) {
            throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR);
        }

        bonusNumber.map(number => {
            if (isNaN(number)) {
                throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NOT_NUMBER_ERROR);
            }

            if (number < CONSTANTS.MIN_NUMBER || number > CONSTANTS.MAX_NUMBER) {
                throw new Error(ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR);
            }
        })
    }
}