import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, CONSTANTS } from "./Constants.js"

export class InputValidator {

    static purchaseAmountValidator(purchaseAmount) {
        if (purchaseAmount%CONSTANTS.LOTTO_PRICE != 0) {
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

        winningNumber.map(number => {
            if (isNaN(Number(number))) {
                throw new Error(ERROR_MESSAGE.WINNING_NUMBER_NOT_NUMBER_ERROR)
            }
        })
    }

    static bonusNumberValidator(bonusNumber) {
        if (bonusNumber.length == 1 && bonusNumber[0] == '') {
            throw new Error(ERROR_MESSAGE.BONUS_NUMBER_LACK_ERROR);
        }

        if (bonusNumber.length > CONSTANTS.NUMBER_OF_BONUS_NUMBER) {
            throw new Error(ERROR_MESSAGE.BONUS_NUMBER_EXEED_ERROR);
        }

        bonusNumber.map(number => {
            if (isNaN(Number(number))) {
                throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NOT_NUMBER_ERROR)
            }
        })
    }
}