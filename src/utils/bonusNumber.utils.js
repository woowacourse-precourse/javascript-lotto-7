import {validationCheck} from "../validation/validationCheck.js";
import {ERROR_CODE, WINNING_NUMBER} from "../constants/constants.js";

export const bonusNumberUtils = {
    validate(bonusNumber) {
        if (!validationCheck.isPositiveNumber(bonusNumber))
            throw new Error(ERROR_CODE.NOT_POSITIVE_NUMBER);
        if (!validationCheck.isInRange(bonusNumber, WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER)) {
            throw new Error(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
        }
        return Number(bonusNumber);
    },
    validateWithWinningNumbers(bonusNumber, winningNumber) {
        if (validationCheck.hasDuplicates([...winningNumber, bonusNumber]))
            throw new Error(ERROR_CODE.BONUS_NUMBER_DUPLICATE)
    }
}